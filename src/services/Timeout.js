
import { useNavigate } from "react-router-dom"
import Authdata from "./authservice"
import jwtDecode from "jwt-decode"
import axios from "axios"

const Decoder=()=>{
    const navigate=useNavigate()
    
    const user=Authdata.getuserdata()
    if(user){
        try{
    const accessTokens=user.accessToken
    const decoded=jwtDecode(accessTokens)
    const exp=decoded.exp*1000  
    const nowdate=Date.now()
    // console.log("Expiration time",new Date(exp))
    // console.log("Present date",new Date(nowdate))
    if(nowdate>exp)
    {
        Authdata.logout()
        navigate('/home')
        window.location.reload()
    }}catch(error){
        console.log(error.message)
    }
}
    
   
}
const getadmind=()=>{
    const sevurl="http://localhost:5000/auth"
    return axios.get(sevurl+'/allproducts')
    .then((response)=>{

        // console.log(response)
        return response
    })
}
const getadminbycategory=(category)=>{
    const sevurl="http://localhost:5000/auth"
    return axios.post(sevurl+'/allproductsbycategory',{category})
    .then((response)=>{

        // console.log(response)
        return response
    })
}
const getuseremail=()=>{
    const user=Authdata.getuserdata();
    if(user){
    const accessTokens=user.accessToken;
    const decoded=jwtDecode(accessTokens)
    // console.log(decoded)

    const id=decoded.aud
    // console.log(id)
    const sevurl="http://localhost:5000/auth"
    return axios.post(sevurl+"/userid",{id})
    .then((response)=>{
        console.log(response.data.email)
        return(response.data.email)
        // console.log(emailid)

    })}
    
}

function dataset(name,disc,imgg,price){
    const ary=[name,disc,imgg,price]
    localStorage.setItem('Productdata', JSON.stringify(ary))
    console.log("data for product uploaded",ary)
    

}
function getproduct(){
    const prdata=JSON.parse(localStorage.getItem('Productdata'))
    console.log(prdata)
    return prdata
}
const decode={Decoder,getadmind,getadminbycategory,getuseremail,dataset,getproduct}

export default decode