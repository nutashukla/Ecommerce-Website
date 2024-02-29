import { useEffect, useState } from "react";
import Authdata from "./authservice";
import Postheader from "./Postheader";
import { useNavigate } from "react-router-dom";
import Navbar1 from "./Private/Navbar1";
import decode from "./Timeout";
import Product from "./Private/Product";


const Private = () => {
    const navigate = useNavigate()
    const [admindata, setAdmindata] = useState(null)
    useEffect(() => {
        Postheader.postedData().then((response) => {
            console.log(response)
        },
            (error) => {
                console.log(error.response)
                Authdata.logout()
                navigate('/home')
                window.location.reload()
            })
    }, [])
    useEffect(() => {
        decode.getadmind().then((response) => {
            console.log(response.data)
            setAdmindata(response.data)
        })
    }, [])

    decode.Decoder()
    return (<>
        <Navbar1 />
        this is private page on the frontend
        <div className="categories">
            {admindata && admindata.map((element, index) =>
                <div style={{ margin: "1rem" }} key={index}>
                    <Product img={"https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1999&q=80"}
                        category={`${element.category}`}
                        pdis={`${element.pdis}`}
                        productnm={`${element.pname}`}
                        price={`${element.price}`} />
                </div>
            )}
        </div>
    </>)
}
export default Private