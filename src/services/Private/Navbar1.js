import { Link } from "react-router-dom"

function Navbar1(){
    return(<>
    <div className="cnavbar">
        <Link to={"/category1"}>CATEGORY 1</Link>
        <Link to={"/category2"}>CATEGORY 2</Link>
        <Link>CATEGORY 3</Link>
        <Link>CATEGORY 4</Link>  
        <Link>CATEGORY 5</Link>
        <Link>CATEGORY 6</Link>
    </div>
    
    </>)
}
export default Navbar1
