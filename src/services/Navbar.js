import Authdata from "./authservice";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
function Navbar() {
  const navigate = useNavigate()
  const [currentUser, setCurrentUser] = useState(null);
  const [bgcolor, setBgcolor] = useState('white')
  const [clr, setClr] = useState('black')
  const dark = () => {
    if (bgcolor === 'white') {
      setBgcolor('black')
      setClr('white')
    }
    if (bgcolor === 'black') {
      setBgcolor('white')
      setClr('black')
    }
  }

  useEffect(() => {
    const user = Authdata.getuserdata();

    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const logOut = () => {
    Authdata.logout();
    navigate('/login')
    window.location.reload(); // reload the page after logging out so that it updates state and
  };
  return (
    <nav className="navbar navbar-expand-lg nvBartop " style={{ backgroundColor: `${bgcolor}` }}>



      <div className="nvbar">
        <div className="navbar-nav mr-auto " >
          <li>
            <Link style={{ color: `${clr}` }} to={"/home"} className="nav-link">
              Home
            </Link>
          </li>

          {currentUser && (
            <li >
              <Link style={{ color: `${clr}` }} to={"/private"} className="nav-link">
                Private
              </Link>
            </li>)}
        </div>
        {currentUser ? (
          <div className="navbar-nav ms-auto">
            <li >
              <Link style={{ color: `${clr}` }} to={"/login"} className="nav-link" onClick={logOut}>
                Logout
              </Link>
            </li>
          </div>
        ) : (
          <div className="navbar-nav ms-auto">
            <li >
              <Link style={{ color: `${clr}` }} to={"/login"} className="nav-link">
                Login
              </Link>
            </li>

            <li >
              <Link style={{ color: `${clr}` }} to={"/register"} className="nav-link">
                Register
              </Link>
            </li>
          </div>
        )}
        <div className="navbar-nav mr-auto ">
          <li style={{ listStyle: 'none' }}>
            <Link style={{ color: `${clr}` }} to={"/cart"} className="nav-link">
              Cart
            </Link>
          </li></div>
      </div>

      <div className="navbar-nav mr-auto abcdefg">
        <label className="switch">
          <input onChange={dark} type="checkbox" />
          <span className="slider"></span>
        </label>
        <li style={{ color: `${clr}`, margin: '0px 8px' }}> Switch Mode</li>
      </div>
    </nav>
  )
}
export default Navbar