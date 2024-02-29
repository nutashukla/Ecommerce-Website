import axios from "axios"
import { useEffect, useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import authdata from "../authservice"
import decode from "../Timeout"



function Product(props) {
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
    const pname = props.productnm
    const price = props.price
    console.log(quantity)
    console.log(pname)
    return axios.post(sevurl + "/cartitems", { pname, quantity, email, price })
      .then((response) => {
        console.log("success")
        console.log(response)
      })
  }
  const dataview = () => {
    if (props.productnm) {
      const name = props.productnm
      const disc = props.pdis
      const imgg = props.img
      const price = props.price
      decode.dataset(name, disc, imgg, price)
    }
  }

  decode.Decoder()
  return (<>
    <div className="card" style={{ width: '18rem' }} >
      <Link onClick={dataview} to={'/prview'}>
        <img src={props.img} className="card-img-top" alt="..." />
      </Link>
      <div className="card-body" style={{ textAlign: 'center' }}>
        <h5 className="card-title" style={{ textAlign: 'center' }}>{props.productnm}</h5>
        <p className="card-title" style={{ textAlign: 'center' }}>{props.category}</p>
        <p className="card-title" style={{ textAlign: 'center' }}>{props.pdis}</p>
        <p className="card-title" style={{ textAlign: 'center' }}>&#8377; {props.price}</p>
        <button className="ctrbtn" to="#" >Buy now</button>
        <button className="ctrbtn" onClick={Addtocart} style={{ display: `${abc2()}`, marginLeft: '4px', marginRight: '4px' }} >Add to cart</button>
        <Link to="#" className="ctrbtn" style={{ border: '2px solid black', marginLeft: '4px', marginRight: '4px', display: `${abc1()}` }}><button className="ctrbtn1" onClick={() => { if (quantity > 0) { setQuantity(quantity - 1) } }}> - </button>{quantity}<button className="ctrbtn1" onClick={() => { setQuantity(quantity + 1); }}>+</button></Link>

        <Link className="ctrbtn" to="/cart" onClick={Senddata} style={{ display: `${abc()}` }}>Goto cart</Link>
      </div>
    </div>
  </>)
}
export default Product