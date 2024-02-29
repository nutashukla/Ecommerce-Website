import { useEffect, useState } from "react"
import Postheader from "../Postheader"
import authdata from "../authservice"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import Cartproduct from "./Cartproduct"
import decode from "../Timeout"

function Cart() {

    const navigate = useNavigate()
    const [cartdata, setCartdata] = useState(null)

    useEffect(() => {
        Postheader.postedData()
            .then(() => {
            }).catch((error) => {
                console.log("Error", error)
                authdata.logout()
                navigate('/login')
                window.location.reload()
            })
    }, [])
    useEffect(() => {
        async function abcd() {
            const response = await decode.getuseremail()
            return response
        }
        abcd().then((response) => {
            authdata.getCartItems(response).then((result) => {
                console.log(result)
                console.log(response)
                setCartdata(result)
            })
        })

    }, [])
    // const Remcartitem = () => {
    //     return axios.post(sevurl + "/cartrem", {pname})
    //       .then((response) => {
    //         console.log("success")
    //         // console.log(response)
    //       })
    //   }
    console.log(cartdata)
    return (
        <>
            this is my cart
            <div className="cartprdt">
                {cartdata && cartdata.map((element, index) =>
                    <div key={index}>
                        <div className="card" style={{ width: '15rem', textAlign: 'center' }} >
                            <div className="card-body" >
                                <Cartproduct pname={`${element.pname}`} price={`${element.price}`} setCartdata={setCartdata} cartdata={cartdata} quantity={`${element.quantity}`} />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}
export default Cart