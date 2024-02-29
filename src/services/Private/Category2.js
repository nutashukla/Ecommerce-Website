// import { useNavigate } from "react-router-dom"
// import Postheader from "../Postheader"
// import Authdata from "../authservice"
// import { useEffect } from "react"

import { useEffect, useState } from "react"
import decode from "../Timeout"
import Product from "./Product"

function Category2() {
    const [admindata, setAdmindata] = useState(null)
    // const navigate = useNavigate()
    // const user=Authdata.getuserdata()
    // if(!user)
    // navigate('/login')

    // useEffect(() => {
    //     Postheader.postedData().then((response) => {
    //         console.log(response)
    //     },
    //         (error) => {
    //             console.log(error.response)
    //             Authdata.logout()
    //             navigate('/login')
    //             window.location.reload()
    //         })
    // }, [])

    const a = [1, 2, 3, 4, 5, 6, 7, 8]
    useEffect(() => {
        decode.getadminbycategory("Category2").then((response) => {
            console.log(response.data)
            setAdmindata(response.data)
        })
    }, [])
    return (<>
        <h3>This is category 2 page</h3>

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
export default Category2