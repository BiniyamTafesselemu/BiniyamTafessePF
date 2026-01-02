import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import inst from '../assets/inst.JPG'; // Adjust the path as necessary
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faBriefcase, faClipboardList, faBlog, faFileAlt, faEnvelope, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-white dark:bg-gray-900 shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-26">
                    {/* Logo Section*/}
                    <div className="flex-shrink-0">
                        <img src={inst} alt="Logo" className="h-[80px] w-[80px] rounded-full" />
                    </div>

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:flex space-x-4">
                        <NavLink
                            to="/home"
                            className={({ isActive }) =>
                                isActive
                                    ? 'text-teal-600 font-semibold'
                                    : 'text-gray-600 hover:text-teal-600'
                            }
                        >
                            <FontAwesomeIcon icon={faHome} className="mr-1" /> Home
                        </NavLink>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                isActive
                                    ? 'text-teal-600 font-semibold'
                                    : 'text-gray-600 hover:text-teal-600'
                            }
                        >
                            <FontAwesomeIcon icon={faUser} className="mr-1" /> About
                        </NavLink>
                        <NavLink
                            to="/work"
                            className={({ isActive }) =>
                                isActive
                                    ? 'text-teal-600 font-semibold'
                                    : 'text-gray-600 hover:text-teal-600'
                            }
                        >
                            <FontAwesomeIcon icon={faBriefcase} className="mr-1" /> Work
                        </NavLink>
                        <NavLink
                            to="/experience"
                            className={({ isActive }) =>
                                isActive
                                    ? 'text-teal-600 font-semibold'
                                    : 'text-gray-600 hover:text-teal-600'
                            }
                        >
                            <FontAwesomeIcon icon={faClipboardList} className="mr-1" /> Experience
                        </NavLink>
                        <NavLink
                            to="/blog"
                            className={({ isActive }) =>
                                isActive
                                    ? 'text-teal-600 font-semibold'
                                    : 'text-gray-600 hover:text-teal-600'
                            }
                        >
                            <FontAwesomeIcon icon={faBlog} className="mr-1" /> Blog
                        </NavLink>
                        <NavLink
                            to="/resume"
                            className={({ isActive }) =>
                                isActive
                                    ? 'text-teal-600 font-semibold'
                                    : 'text-gray-600 hover:text-teal-600'
                            }
                        >
                            <FontAwesomeIcon icon={faFileAlt} className="mr-1" /> Resume
                        </NavLink>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                isActive
                                    ? 'text-teal-600 font-semibold'
                                    : 'text-gray-600 hover:text-teal-600'
                            }
                        >
                            <FontAwesomeIcon icon={faEnvelope} className="mr-1" /> Contact
                        </NavLink>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            type="button"
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 text-gray-400 hover:text-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="h-6 w-6" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            <div className={`absolute right-0 z-10 w-48 bg-white dark:bg-gray-900 rounded-md shadow-lg ${isOpen ? 'block' : 'hidden'}`} id="mobile-menu">
                <div className="px-2 py-2">
                    <NavLink
                        to="/home"
                        className={({ isActive }) =>
                            isActive
                                ? 'text-teal-600 font-semibold block px-3 py-2 rounded-md text-base'
                                : 'text-gray-600 hover:text-teal-600 block px-3 py-2 rounded-md text-base'
                        }
                    >
                        <FontAwesomeIcon icon={faHome} className="mr-1" /> Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            isActive
                                ? 'text-teal-600 font-semibold block px-3 py-2 rounded-md text-base'
                                : 'text-gray-600 hover:text-teal-600 block px-3 py-2 rounded-md text-base'
                        }
                    >
                        <FontAwesomeIcon icon={faUser} className="mr-1" /> About
                    </NavLink>
                    <NavLink
                        to="/work"
                        className={({ isActive }) =>
                            isActive
                                ? 'text-teal-600 font-semibold block px-3 py-2 rounded-md text-base'
                                : 'text-gray-600 hover:text-teal-600 block px-3 py-2 rounded-md text-base'
                        }
                    >
                        <FontAwesomeIcon icon={faBriefcase} className="mr-1" /> Work
                    </NavLink>
                    <NavLink
                        to="/experience"
                        className={({ isActive }) =>
                            isActive
                                ? 'text-teal-600 font-semibold block px-3 py-2 rounded-md text-base'
                                : 'text-gray-600 hover:text-teal-600 block px-3 py-2 rounded-md text-base'
                        }
                    >
                        <FontAwesomeIcon icon={faClipboardList} className="mr-1" /> Experience
                    </NavLink>
                    <NavLink
                        to="/blog"
                        className={({ isActive }) =>
                            isActive
                                ? 'text-teal-600 font-semibold block px-3 py-2 rounded-md text-base'
                                : 'text-gray-600 hover:text-teal-600 block px-3 py-2 rounded-md text-base'
                        }
                    >
                        <FontAwesomeIcon icon={faBlog} className="mr-1" /> Blog
                    </NavLink>
                    <NavLink
                        to="/resume"
                        className={({ isActive }) =>
                            isActive
                                ? 'text-teal-600 font-semibold block px-3 py-2 rounded-md text-base'
                                : 'text-gray-600 hover:text-teal-600 block px-3 py-2 rounded-md text-base'
                        }
                    >
                        <FontAwesomeIcon icon={faFileAlt} className="mr-1" /> Resume
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            isActive
                                ? 'text-teal-600 font-semibold block px-3 py-2 rounded-md text-base'
                                : 'text-gray-600 hover:text-teal-600 block px-3 py-2 rounded-md text-base'
                        }
                    >
                        <FontAwesomeIcon icon={faEnvelope} className="mr-1" /> Contact
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
