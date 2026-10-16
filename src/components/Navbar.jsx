import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Godlifelogo from "../assets/Godlife-logo.png";
import Godlifelogo2 from "../assets/godlife-logo2.png";
import { useTranslation } from "react-i18next";


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
                    <div className="flex items-center justify-between px-4 sm:px-6 lg:px-10">
                        {/* Logo */}
                        <NavLink to="/">
                            <img
                                alt="Godlife Network- Alter of Worship"
                                width={scrolled ? 70 : 110}
                                height={40}
                                className="object-contain transition-all duration-300 ease-in-out border-4 border-red-600 rounded-2xl"
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
                                    to="/m"
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
                            <button
                                className={`lg:hidden navbar-end transition-all duration-300 
              ${scrolled ? "text-black" : "text-white"}`}
                                aria-label="Toggle navigation"
                                onClick={() => setMenuOpen(!menuOpen)}
                            >
                                {menuOpen ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2">
                                        <line x1="18" y1="6" x2="6" y2="18" />
                                        <line x1="6" y1="6" x2="18" y2="18" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2">
                                        <line x1="4" y1="6" x2="20" y2="6" />
                                        <line x1="4" y1="12" x2="20" y2="12" />
                                        <line x1="4" y1="18" x2="20" y2="18" />
                                    </svg>
                                )}
                            </button>


                            {/* Mobile Menu */}
                            <div
                                className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out 
    ${menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"} 
    ${scrolled ? "bg-white text-black" : "bg-black text-white"}`}
                            >
                                <div className="flex flex-col items-start p-4 space-y-2 overflow-y-auto">
                                    <NavLink
                                        to="/"
                                        onClick={() => setMenuOpen(false)}
                                        className={({ isActive }) =>
                                            isActive ? "font-bold text-red-600" : "font-bold"
                                        }
                                    >
                                        {t("home")}
                                    </NavLink>

                                    <NavLink
                                        to="/About"
                                        onClick={() => setMenuOpen(false)}
                                        className={({ isActive }) =>
                                            isActive ? "font-bold text-red-600" : "font-bold"
                                        }
                                    >
                                        {t("about")}
                                    </NavLink>

                                    <NavLink
                                        to="/Event"
                                        onClick={() => setMenuOpen(false)}
                                        className={({ isActive }) =>
                                            isActive ? "font-bold text-red-600" : "font-bold"
                                        }
                                    >
                                        {t("event")}
                                    </NavLink>

                                    <NavLink
                                        to="/Blog"
                                        onClick={() => setMenuOpen(false)}
                                        className={({ isActive }) =>
                                            isActive ? "font-bold text-red-600" : "font-bold"
                                        }
                                    >
                                        {t("blog")}
                                    </NavLink>

                                    <NavLink
                                        to="/q"
                                        onClick={() => setMenuOpen(false)}
                                        className={({ isActive }) =>
                                            isActive ? "font-bold text-red-600" : "font-bold"
                                        }
                                    >
                                        {t("contact")}
                                    </NavLink>

                                    <NavLink
                                        to="/m"
                                        onClick={() => setMenuOpen(false)}
                                        className={({ isActive }) =>
                                            isActive ? "font-bold text-red-600" : "font-bold"
                                        }
                                    >
                                        {t("media")}
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
                            </div>


                        </nav>
                    </div>
                </div >
            </header >
        </>
    );
}

export default Navmenu;
