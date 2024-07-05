
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='w-full'>
            <nav className=" px-5 py-3 w-full">
                <div className="mx-auto flex justify-between items-center">
                    <NavLink to='/' className="text-black font-bold text-2xl flex items-center"><img src='https://res.cloudinary.com/do6j2zknr/image/upload/f_auto,q_auto/v1/web%20design/rviykzvfrncsgs9gmdrx' className='w-20 h-20'></img>tudy<span className='text-yellow-500'>O</span>ccean</NavLink>
                    <div className="hidden md:flex space-x-4 font-semibold">
                        <NavLink to="/courses" className="text-black hover:text-gray-800">Courses</NavLink>
                        <NavLink to="/about" className="text-black hover:text-gray-800">About</NavLink>
                        <NavLink to="/contact" className="text-black hover:text-gray-800">Contact</NavLink>
                    </div>
                    <div className='hidden md:flex space-x-4 font-semibold'>

                        <NavLink to="/login" className="text-black hover:text-gray-800 px-5 py-1.5 rounded-md border border-black ">Login</NavLink>
                        <NavLink to="/signup" className="text-black hover:text-gray-800 px-5 py-1.5 rounded-md border border-black">Signup</NavLink>
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={toggleNavbar}
                            className="text-black hover:text-gray-800 focus:outline-none"
                        >
                            <svg
                                className="w-6 h-6 fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                {isOpen ? (
                                    <path d="M19 12H5M12 19l-7-7 7-7" />
                                ) : (
                                    <path d="M3 3h18v18H3z" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
                {isOpen && (
                    <div className="md:hidden bg-blue-500 p-4 absolute top-18 right-[5%]">
                        <a href="/" className="block text-black hover:text-gray-800 mb-2">Home</a>
                        <a href="/" className="block text-black hover:text-gray-800 mb-2">About</a>
                        <a href="/" className="block text-black hover:text-gray-800 mb-2">Services</a>
                        <a href="/" className="block text-black hover:text-gray-800">Contact</a>
                    </div>
                )}
            </nav>









        </div>
    )
}

export default Navbar
