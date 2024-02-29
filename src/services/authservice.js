import axios from "axios";
const sevurl = "http://localhost:5000/auth"

const register = (name, email, password, cpassword) => {
    return axios.post(sevurl + "/register",
        { name, email, password, cpassword })
        .then((response) => {
            if (response.data.details[0])
                return response.data.details[0]
            if (response.data.message)
                return response.data
            if (response.data.accessToken) {
                localStorage.setItem('user', JSON.stringify(response.data))
                console.log(response)
                return response.data
            }
        })
}
const login = (email, password) => {
    return axios.post(sevurl + "/login",
        { email, password })
        .then((response) => {
            if (response.data.details)
                return response.data.details[0]
            if (response.data.message)
                return response.data
            if (response.data.accessToken) {
                localStorage.setItem('user', JSON.stringify(response.data))
            }
            // console.log(response)
            return response.data
        })
}
// removing the token data
const logout = () => {
    localStorage.removeItem('user')
}
// getting the token data
const getuserdata = () => {
    return JSON.parse(localStorage.getItem('user'))
}
const getCartItems=(email)=>{
    return axios.post(sevurl+"/cart",{email})
    .then((response)=>{
    //   console.log("success")
    //   console.log(response)
    // localStorage.setItem('cart', JSON.stringify(response.data))
    return response.data
      // console.log(response)
    })}
    

// exporting data
const authdata = { register, login, logout, getuserdata,getCartItems }
export default authdata