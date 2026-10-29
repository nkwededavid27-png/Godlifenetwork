import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Godlifelogo from "../assets/Godlife-logo.png";
import Godlifelogo2 from "../assets/godlife-logo2.png";
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react";


function Navmenu() {

    const { t, i18n } = useTranslation();  // <-- this gives you t() and i18n
    const [isEnglish, setIsEnglish] = useState(i18n.language === "en");
    const toggleLanguage = () => {
        const newLang = isEnglish ? "fr" : "en";
        i18n.changeLanguage(newLang);
        setIsEnglish(!isEnglish);
    };

    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            // adjust 100 for your hero height threshold
            if (window.scrollY > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {open && (
                <div
                    className="fixed inset-0 text-red-600 bg-opacity-50 z-40"
                    onClick={() => setOpen(false)}
                ></div>
            )}
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4 ${scrolled ? "bg-white shadow-md py-2" : "bg-transparent"
                    }`}
            >
                <div className="container-max">
                    <div className="flex items-center justify-between px-4 sm:px-6 lg:px-10 ">

                        <button
                            className={`lg:hidden transition-all duration-300 ${scrolled ? "text-black" : "text-white"}`}
                            aria-label="Toggle navigation"
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            {menuOpen ? (
                                <X />
                            ) : (
                                <Menu className="h-8 w-8" />
                            )}
                        </button>


                        {/* Logo */}
                        <NavLink to="/"
                            className="ml-auto lg:mr-auto lg:ml-0">
                            <img
                                alt="Godlife Network- Alter of Worship"
                                width={scrolled ? 70 : 110}
                                height={40}
                                className="object-contain  object-right transition-all duration-300 ease-in-out border-2 border-red-600 rounded-2xl"
                                src={scrolled ? Godlifelogo2 : Godlifelogo}
                            />
                        </NavLink>

                        {/* Navigation */}
                        <nav className="relative">
                            {/* Desktop Menu */}
                            <div className="hidden md:hidden lg:flex items-center space-x-5">
                                <NavLink
                                    to="/"
                                    onClick={() => setOpen(false)}
                                    className={({ isActive }) =>
                                        isActive
                                            ? scrolled
                                                ? "nav-link font-bold active  text-red-600"
                                                : "nav-link font-bold text-2xl text-red-600"
                                            : scrolled
                                                ? "nav-link font-bold active  text-black "
                                                : "nav-link font-bold text-2xl text-white"
                                    }
                                >
                                    {t("home")}
                                </NavLink>

                                <NavLink
                                    to="/About"
                                    onClick={() => setOpen(false)}
                                    className={({ isActive }) =>
                                        isActive
                                            ? scrolled
                                                ? "nav-link font-bold active  text-red-600"
                                                : "nav-link font-bold text-2xl text-red-600"
                                            : scrolled
                                                ? "nav-link font-bold active  text-black "
                                                : "nav-link font-bold text-2xl text-white"
                                    }
                                >
                                    {t("about")}
                                </NavLink>

                                <NavLink
                                    to="/Event"
                                    onClick={() => setOpen(false)}
                                    className={({ isActive }) =>
                                        isActive
                                            ? scrolled
                                                ? "nav-link font-bold active  text-red-600"
                                                : "nav-link font-bold text-2xl text-red-600"
                                            : scrolled
                                                ? "nav-link font-bold active  text-black "
                                                : "nav-link font-bold text-2xl text-white"
                                    }
                                >
                                    {t("event")}
                                </NavLink>

                                <NavLink
                                    to="/Blog"
                                    onClick={() => setOpen(false)}
                                    className={({ isActive }) =>
                                        isActive
                                            ? scrolled
                                                ? "nav-link font-bold active  text-red-600"
                                                : "nav-link font-bold text-2xl text-red-600"
                                            : scrolled
                                                ? "nav-link font-bold active  text-black "
                                                : "nav-link font-bold text-2xl text-white"
                                    }
                                >
                                    {t("blog")}
                                </NavLink>

                                
                                <NavLink
                                    to="/Media"
                                    onClick={() => setOpen(false)}
                                    className={({ isActive }) =>
                                        isActive
                                            ? scrolled
                                                ? "nav-link font-bold active  text-red-600"
                                                : "nav-link font-bold text-2xl text-red-600"
                                            : scrolled
                                                ? "nav-link font-bold active  text-black "
                                                : "nav-link font-bold text-2xl text-white"
                                    }
                                >
                                    {t("media")}
                                </NavLink>

                                
                                <NavLink
                                    to="/Contact"
                                    onClick={() => setOpen(false)}
                                    className={({ isActive }) =>
                                        isActive
                                            ? scrolled
                                                ? "nav-link font-bold active  text-red-600"
                                                : "nav-link font-bold text-2xl text-red-600"
                                            : scrolled
                                                ? "nav-link font-bold active  text-black "
                                                : "nav-link font-bold text-2xl text-white"
                                    }
                                >
                                    {t("contact")}
                                </NavLink>


                                <button
                                    onClick={toggleLanguage}
                                    className={`relative inline-flex items-center h-6 w-12 rounded-full transition-colors ${scrolled ? "bg-gray-300" : "bg-white/30"
                                        }`}
                                >
                                    <span
                                        className={`inline-block w-5 h-5 transform rounded-full bg-red-600 transition-transform ${isEnglish ? "translate-x-1" : "translate-x-6"
                                            }`}
                                    />
                                    <span className="absolute left-1 text-xs font-bold text-black">EN</span>
                                    <span className="absolute right-1 text-xs font-bold text-black">FR</span>
                                </button>


                            </div>

                            {/* Mobile Menu Button */}



                            {/* Mobile Menu */}
                            {menuOpen && (
                                <div
                                    className="fixed inset-0 lg:hidden"
                                    onClick={() => setMenuOpen(false)}
                                />
                            )}
                            <div
                               className={`lg:hidden fixed top-0 left-0 h-screen w-1/2 transform transition-all duration-500 ease-in-out
                                    ${menuOpen ? "translate-x-0 opacity-100 scale-100" : "-translate-x-full opacity-0 scale-95"} 
                                    ${scrolled ? "bg-white text-black" : "bg-black text-white"}`}
                            >
                                <img
                                    alt="Godlife Network- Alter of Worship"
                                    width={scrolled ? 70 : 70}
                                    height={40}
                                    className="object-contain m-auto mt-5 transition-all duration-300 ease-in-out border-4 border-red-600 rounded-2xl"
                                    src={scrolled ? Godlifelogo2 : Godlifelogo}
                                />
                                <div className="flex flex-col items-start p-4 space-y-2 overflow-y-auto">
                                    <NavLink
                                        to="/"
                                        onClick={() => setMenuOpen(false)}
                                        className={({ isActive }) =>
                                            isActive ? "font-bold m-auto text-red-600" : "font-bold m-auto"
                                        }
                                    >
                                        {t("home")}
                                    </NavLink>

                                    <NavLink
                                        to="/About"
                                        onClick={() => setMenuOpen(false)}
                                        className={({ isActive }) =>
                                            isActive ? "font-bold m-auto mt-5 text-red-600" : "font-bold mt-5 m-auto"
                                        }
                                    >
                                        {t("about")}
                                    </NavLink>

                                    <NavLink
                                        to="/Event"
                                        onClick={() => setMenuOpen(false)}
                                        className={({ isActive }) =>
                                            isActive ? "font-bold mt-5 m-auto text-red-600" : "font-bold mt-5 m-auto"
                                        }
                                    >
                                        {t("event")}
                                    </NavLink>

                                    <NavLink
                                        to="/Blog"
                                        onClick={() => setMenuOpen(false)}
                                        className={({ isActive }) =>
                                            isActive ? "font-bold mt-5 m-auto text-red-600" : "font-bold mt-5 m-auto"
                                        }
                                    >
                                        {t("blog")}
                                    </NavLink>

                                    <NavLink
                                        to="/Media"
                                        onClick={() => setMenuOpen(false)}
                                        className={({ isActive }) =>
                                            isActive ? "font-bold mt-5 m-auto text-red-600" : "font-bold mt-5 m-auto"
                                        }
                                    >
                                        {t("media")}
                                    </NavLink>

                                    <NavLink
                                        to="/Contact"
                                        onClick={() => setMenuOpen(false)}
                                        className={({ isActive }) =>
                                            isActive ? "font-bold mt-5 m-auto text-red-600" : "font-bold mt-5 m-auto"
                                        }
                                    >
                                        {t("contact")}
                                    </NavLink>

                                    <button
                                        onClick={toggleLanguage}
                                        className={`relative inline-flex items-center m-auto h-6 w-12 mt-5 rounded-full transition-colors ${scrolled ? "bg-gray-300" : "bg-white/30"
                                            }`}
                                    >
                                        <span
                                            className={`inline-block w-5 h-5 transform rounded-full bg-red-600 transition-transform ${isEnglish ? "translate-x-1" : "translate-x-6"
                                                }`}
                                        />
                                        <span className="absolute left-1 text-xs font-bold text-black">EN</span>
                                        <span className="absolute right-1 text-xs font-bold text-black">FR</span>
                                    </button>


                                </div>
                            </div>


                        </nav>
                    </div>
                </div >
            </header>
        </>
    );
}

export default Navmenu;
