import axios from "axios"
import { useEffect, useState } from "react"
import decode from "../Timeout"

function Cartproduct(props) {
    // const [pname, setPname] = useState("")
    const sevurl = "http://localhost:5000/auth"
    const Remcartitem = async() => {
        const pname=props.pname
        const email= await decode.getuseremail()
        console.log(email)
        return axios.post(sevurl + "/cartrem", { pname,email })
            .then((response) => {
                console.log(response.data)
                // console.log(response)
                props.setCartdata(props.cartdata.filter(item => item.id !== response.data.id))
            })
    }
    // useEffect(()=>{console.log("rerendered after deletion")},[Remcartitem])
    // console.log(pname)
    return (<>
        <h1>{props.pname}</h1>
        <p><strong> Qunatity</strong> - <strong>{props.quantity}</strong></p>
        <p><strong> &#8377;</strong> - <strong>{props.price}</strong></p>
        <a href="/cart" onClick={Remcartitem} style={{ width: '10rem', textAlign: 'center', marginLeft: '1rem',border:'red', backgroundColor:'red' }} className="btn btn-primary">Delete Item</a>

    </>)
}
export default Cartproduct