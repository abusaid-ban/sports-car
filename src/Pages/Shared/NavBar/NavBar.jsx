import { Link } from "react-router-dom";
import logo from '../../../assets/logo-removebg-preview.png'
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const NavBar = () => {
    const {user,logOut} = useContext(AuthContext);
    // console.log(user);

    const handleLogOut=()=>{
        logOut()
        .then(()=>{})
        .catch(error => console.log(error))

    }

    const navItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/allToys'>All Toys</Link></li>
        <li><Link to='/blogs'>Blogs</Link></li>
       { user?.email?
       <div className="flex">
         <li><Link to='/myToys'>My Toys</Link></li>
        <li><Link to='/addToys'>Add a Toys</Link></li>
        <li><img className="bg-orange-500 w-6 h-6 rounded-full " src={user.photoURL} alt="dp" /></li>
        <li className="navbar-end"><button onClick={handleLogOut}>Log Out</button></li>
       </div>
        : <li><Link to='/login' > <button className="btn bg-red-500">Login</button></Link></li>
        }

    </>
    return (
        <div className="navbar flex items-center bg-blue-50 h-40 px-4 py-4">
            <div className="navbar-start ">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    {navItems}
                    </ul>
                </div>
                <Link to='/'>
                    <img src={logo} alt="" />
                </Link>
                <h2>Kids Gallary</h2>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                {navItems}
                </ul>
            </div>
            <div className="navbar-end">
              {/* <img src="" alt="user profile picture" /> */}
             {/* <Link to='/login'> <button className="btn bg-red-500">Login</button></Link> */}
            </div>
        </div>
    );
};

export default NavBar;