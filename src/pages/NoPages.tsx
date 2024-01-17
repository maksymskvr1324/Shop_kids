import { Navbar } from "../components/Navbar";
import { Link } from 'react-router-dom';

export default function NotPages(){
    return(
        <>
            <Navbar/>
            <div className="container_notPage">
                <p className="notPage_title">Oops</p>
                <h1>404 - PAGE NOT FOUND</h1>
                <p className="text">The page you are looking for might have been removed had its name changed or is temporarily unavailable</p>
                <Link to="/Home"><button className="notPage_btn">Back to home</button></Link>
            </div>
        </>
    )
}