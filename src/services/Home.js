
import Navbar1 from "./Private/Navbar1"
import Crausel from "./Private/Craousel"
import decode from "./Timeout"
import { useEffect, useState } from "react"
import Product from "./Private/Product"
const Home = () => {
    const [admindata, setAdmindata] = useState(null)
    useEffect(() => {
        decode.getadmind().then((response) => {
            console.log(response.data)
            setAdmindata(response.data)
        })
    }, [])
    return (<>
        <hr />
        <Navbar1 />

        <hr />
        <Crausel />
        <hr />
        <h1 style={{ margin: 'auto', textAlign: 'center' }}>Products</h1>
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
        <hr />
    </>
    )
}
export default Home