import { NavLink } from "react-router-dom";

const Navbar = () => {
    const Tabs = [
        <NavLink className={({ isActive }) => isActive ? `bg-[#924AEF] py-2 md:py-2.5 px-3 md:px-5 lg:px-5 text-white font-bold text-xs md:text-sm  rounded` : `bg-transparent py-2 md:py-2 md:px-2 font-bold text-xs md:text-sm  rounded `} to="/" >HOME</NavLink>,
        <NavLink className={({ isActive }) => isActive ? `bg-[#924AEF]  py-2 md:py-2.5 px-3 md:px-5 lg:px-5 text-white font-bold text-xs md:text-sm  rounded` : `bg-transparent py-2 md:py-2 md:px-2 font-bold text-xs md:text-sm  rounded `} to="/shop" >SHOP</NavLink>,
        <NavLink className={({ isActive }) => isActive ? `bg-[#924AEF]  py-2 md:py-2.5 px-3 md:px-5 lg:px-5 text-white font-bold text-xs md:text-sm  rounded` : `bg-transparent py-2 md:py-2 md:px-2 font-bold text-xs md:text-sm  rounded `} to="/about-us" >ABOUT US</NavLink>,
        <NavLink className={({ isActive }) => isActive ? `bg-[#924AEF]  py-2 md:py-2.5 px-3 md:px-5 lg:px-5 text-white font-bold text-xs md:text-sm  rounded` : `bg-transparent py-2 md:py-2 md:px-2 font-bold text-xs md:text-sm  rounded `} to="/contact" >CONTACT</NavLink>,
    ]
    return (
        <>
            <div className="navbar bg-base-100 mont">
                <div className="navbar-start gap-3">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-200 duration-700 shadow-md rounded-md w-52 z-10 gap-3">
                            {
                                Tabs.map((Tab , i) => <li key={i}a>{Tab}</li>)
                            }
                        </ul>
                    </div>
                    <div className="flex gap-3 items-center">
                        <img className="w-8 md:w-10 lg:w-12" src="https://i.ibb.co/tBWqy7s/logo-icon-svg-removebg-preview.png" alt="LOGO" />
                        <h1 className=" text-lg md:text-xl lg:text-3xl mont font-bold "><span className="text-[#924AEF]  pl-0.5 text-xl md:text-2xl lg:text-4xl">K</span>I <span className="text-[#5ECFFF] mont pl-0.5 text-xl md:text-2xl lg:text-4xl">C</span>HAI</h1>
                    </div>
                </div>
                <div className="navbar-end">
                    <button className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                    <button className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                            <span className="badge badge-xs badge-primary indicator-item"></span>
                        </div>
                    </button>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-square avatar">
                            <div className="w-10 rounded-md">
                                <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;