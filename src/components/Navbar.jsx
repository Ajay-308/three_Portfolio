import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <header className='header'>
            <NavLink to='/' className={({ isActive }) => isActive ? "text-blue-600 font-bold" : "text-black"} >
                Home
            </NavLink>
            <nav className='flex top-4 ml-[48rem] text-lg gap-24 text-red font-medium'>
                <NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
                    About
                </NavLink>
                <NavLink to='/projects' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
                    Projects
                </NavLink>
            </nav>
        </header>
    );
};

export default Navbar;
