// import { useNavigate } from "react-router-dom"
// import Postheader from "../Postheader"
// import Authdata from "../authservice"
// import { useEffect } from "react"

import Product from "./Product"

function Category1(){
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
    const a=[1,2,3,4,5,6,7,8]
    return(<><h1 style={{textAlign:'center'}}>This is the category 1 page</h1>
    <div className="categories">
    {a.map((element,index)=>
    <div style={{margin:"1rem"}} key={index}>
    <Product img={"https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1999&q=80"} productnm={`product ${element}`}/>
    </div>
    )
    }
    </div>
    {/* <Product/> */}
    </>)
}
export default Category1