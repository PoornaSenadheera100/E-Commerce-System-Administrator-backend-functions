import { Link, Outlet } from "react-router-dom";

export default function Header(){

    return(
        <>
            <div className="constainer">
                <center>
                    <br></br>
                    <Link className="btn btn-primary btn-lg btn-block" to={'categories'}>Manage Categories</Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link className="btn btn-primary btn-lg btn-block" to={'products'}>Manage Products</Link>
                </center>
            </div>

            <div id="detail">
                <Outlet/>
            </div>
        </>
    )
}