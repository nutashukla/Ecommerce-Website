import { useState } from "react";
import decode from "../Timeout";
import { Link, useNavigate } from "react-router-dom";
import authdata from "../authservice";
import axios from "axios";

function Prview() {
    const data = decode.getproduct()
    if (data) console.log(data)
    const [quantity, setQuantity] = useState(0)
    // const [pname, setPname] = useState(null)
    // const [emailid, setEmailid] = useState(null)
    const navigate = useNavigate()
    const Addtocart = () => {
        if (authdata.getuserdata()) {
            setQuantity(quantity + 1)
        }
        else {
            navigate('/login')
        }
    }
    // setPname(props.productnm)
    // console.log(pname)
    // console.log(quantity)
    // const gtc=useRef("")
    // gtc.current.style.display="none"

    const sevurl = "http://localhost:5000/auth"

    const abc = () => {
        if (quantity > 0) {
            return "inline"
        }
        else {
            return "none"
        }
    }
    const abc1 = () => {
        if (quantity === 0) {
            return "none"
        }
        else {
            return "inline"
        }
    }
    const abc2 = () => {
        if (quantity > 0) {
            return "none"
        }
        else {
            return "inline"
        }
    }



    const Senddata = async () => {
        // if()
        const email = await decode.getuseremail();
        console.log(email)
        const pname = data[0]
        const price=data[3]
        console.log(quantity)
        console.log(pname)
        return axios.post(sevurl + "/cartitems", { pname, quantity, email, price })
            .then((response) => {
                console.log("success")
                console.log(response)
            })
    }
    return (<>
        <div className="card mb-3" >
            <div className="row g-0">
                <div class="col-md-4" style={{ width: '35rem' }}>
                    <img src={data[2]} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8" style={{ width: '30rem', marginLeft: '7rem', marginTop: '1rem' }}>
                    <div className="card-body" style={{ textAlign: 'center' }}>
                        <h5 className="card-title" style={{ textAlign: 'center' }}>{data[0]}</h5>
                        <p className="card-title" style={{ textAlign: 'center' }}>{data[1]}</p>
                        <p className="card-title" style={{ textAlign: 'center' }}>&#8377; {data[3]}</p>
                        <button style={{ width: '30rem', marginTop: '4rem', marginBottom: '0.2rem' }} className="ctrbtn" to="#" >Buy now</button>
                        <button className="ctrbtn" onClick={Addtocart} style={{ display: `${abc2()}`, width: '30rem' }} >Add to cart</button>
                        <Link to="#" className="ctrbtn" style={{ border: '2px solid black', marginLeft: '4px', marginRight: '4px', display: `${abc1()}` }}><button className="ctrbtn1" onClick={() => { if (quantity > 0) { setQuantity(quantity - 1) } }}> - </button>{quantity}<button className="ctrbtn1" onClick={() => { setQuantity(quantity + 1); }}>+</button></Link>

                        <Link className="ctrbtn" to="/cart" onClick={Senddata} style={{ display: `${abc()}`, width: '12rem' }}>Goto cart</Link>
                    </div>
                </div>
            </div>
        </div>

    </>)
}
export default Prview