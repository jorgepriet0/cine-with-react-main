import { NavLink, Link } from "react-router-dom";
import Logo from "/media/logo2blanco.png";


function Navbar() {

    const links = [
        { name: "Home", path: "/" },
        { name: "Películas", path: "/films" },
        { name: "Favoritos", path: "/favs" },
    ];

    const  linkClass= 'text-lg font-medium text-white transition-all duration-200 lg:text-base hover:text-opacity-70 focus:text-opacity-70'
    const  activeLinkClass= 'text-lg font-medium text-[#FFA726] hover:text-[#FFA726] text-lg transition-all duration-200 lg:text-base'


    return (
        <header className="sticky top-0 bg-black">

            <div className="px-4 mx-auto max-w-7xl text-lg ">

                <nav className="flex items-center justify-between h-16 lg:h-20">
                    <Link to="/">
                        <div className="flex flex-shrink-0 text-white ">
                                <img className="w-auto h-8 lg:h-10" src={Logo} alt="" />
                                <span className="mt-2 font-bold	">rime</span>     
                        </div>
                    </Link>

                    <div className="hidden md:flex md:items-center md:space-x-10">
                        <ul className="hidden md:flex md:items-center md:space-x-10">
                    {
                            links.map((link, index) => (
                                <li key={index}>
                                    <NavLink key={index} to={link.path} className={({ isActive }) =>
                                        isActive ? activeLinkClass : linkClass
                                    }>
                                        {link.name}
                                    </NavLink>
                                </li>
                            ))
                        }</ul>
                    </div>

                    <div className="cursor-pointer text-white hidden md:flex md:items-center md:space-x-10">
                        <img className="w-8 mr-1" src="/media/usuario.png" /> Jorge
                    </div>
                </nav>
            </div>
        </header>


    )
}

export default Navbar