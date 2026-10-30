import HeroSection from "../components/HeroSection";
import { SquareArrowRightEnter } from 'lucide-react'
import { Calendar, Clock, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";
import img1 from '../assets/img1.jpeg'
import AOFPP from '../assets/AOFPP.jpg'
import AOWF from '../assets/AOWF.jpg'
import { NavLink } from "react-router-dom";
import ImageSlideshow from "../components/image-carousel";



export default function Home() {
    const { t, } = useTranslation();

    return (
        <div className=" border-red-600 shadow-lg shadow-red-600 ">
            <HeroSection />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-10 p-5">
                <div className="text-center pt-20 p-5 lg:p-10  ">
                    <div className="btn bg-red-200 text-center text-red-600 p-5 rounded-4xl ">
                        {t("welcomeHome")}
                    </div>

                    <h1 className="font-bold text-white pt-10 text-3xl sm:text-4xl lg:text-6xl ">
                        {t("welcomeTitle")}{" "}
                        <span className="bg-linear-to-r from-red-500 via-yellow-500 to-pink-500 bg-clip-text text-transparent">
                            {t("welcomeTitle1")}
                        </span>
                    </h1>
                    <p className="text-lg lg:text-2xl text-center font-black pt-10">
                        {t("welcomeDesc")} <br />
                        <span className="bg-linear-to-r from-red-500 via-yellow-500 to-pink-500 bg-clip-text text-transparent">{t("welcomeDesc1")}</span>
                    </p>

                </div>

                <div>
                    <ImageSlideshow />
                </div>
            </div>


            <div className="text-center p-5 bg-white rounded-3xl shadow-lg shadow-red-600 lg:m-4 m-3">
                <h1 className="text-black uppercase p-3 lg:p-15 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black ">{t("Dhomologeo")}</h1>
                <p className=" md:hidden lg:hidden text-lg p-4 text-gray-600 ">{t("slideRight")}</p>
                {/**Laptop homologeo */}
                <div className="hidden  lg:grid  md:grid md:grid-cols-1 lg:grid-cols-2 p-5 gap-5">
                    <div>
                        <img
                            className="w-ful shadow-lg shadow-red-600 from-red-400 via-yellow-400 "
                            src="/homologeo-e.png" alt="English homologeo image" />
                    </div>

                    <div>
                        <img
                            className="w-ful shadow-lg shadow-red-600 from-red-400 via-yellow-400 "
                            src="/homologeo-f.png" alt="French homologeo image" />
                    </div>
                </div>

                {/**mobile homologeo */}

                <div className="pt-5 md:hidden lg:hidden carousel rounded-box w-full shadow-lg h-100 shadow-red-600 from-red-400 via-yellow-400">
                    <div className="carousel-item w-full">
                        <img
                            src="/homologeo-em.png"
                            className="w-full"
                            alt="English homologeo image" />
                    </div>
                    <div className="carousel-item w-full">
                        <img
                            src="/homologeo-fm.png"
                            className="w-full"
                            alt="French homologeo image" />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 pt-30 pb-50">
                <div className="text-center">
                    <h1 className="lg:text-left text-5xl lg:text-5xl font-bold bg-linear-to-r from-red-500 via-yellow-500 to-pink-500 bg-clip-text text-transparent pb-4  pt-10 lg:pl-10">
                        {t("aboutTitle")}
                    </h1>

                    <p className="font-black m-7 text-xl">{t("homeabout")}</p>
                </div>
                <div className="flex items-center justify-center pt-10 lg:pt-0">
                    <NavLink
                        to="/About"
                        className=" flex px-6 py-3 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition-colors duration-300"
                    >
                        {t("aboutBtn")} <SquareArrowRightEnter className="ml-3" />
                    </NavLink>
                </div>
            </div>

            <div className="text-center pt-20 p-5 lg:p-10 bg-[#ffffff] rounded-3xl shadow-lg shadow-red-600 lg:m-4">
                <div className="btn bg-red-200 text-center text-red-600 p-5 rounded-4xl ">
                    {t("prevEventsTitle")}
                </div>


                <p className="text-lg lg:text-xl text-center text-gray-500 pt-10">
                    {t("prevEventsDesc")}
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-1 gap-5 pt-20 pb-20">

                    <div className="carousel carousel-end rounded-box gap-5">
                        <div className="carousel-item">
                            <div className="card bg-[#000000] w-80 lg:w-96 shadow-sm rounded-2xl m-auto 
                  transition-transform duration-300 ">
                                <figure className="px-10 pt-10">
                                    <img src={img1} alt="Events" className="rounded-xl" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title uppercase">{t("event1Title")}</h2>
                                    <p>{t("event1Desc")}</p>
                                    <div className="card-actions">
                                        <NavLink to='/media#gallery' className="btn btn-primary pr-20 pl-20">{t("viewMoreBtn")}</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="card bg-[#070606] w-80 lg:w-96 shadow-sm rounded-2xl m-auto 
                  transition-transform duration-300 ">
                                <figure className="px-10 pt-10">
                                    <img src={AOWF} alt="Events" className="rounded-xl" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title uppercase">{t("event2Title")}</h2>
                                    <p>{t("event2Desc")}</p>
                                    <div className="card-actions">
                                        <NavLink to='/media#gallery' className="btn btn-primary pr-20 pl-20">{t("viewMoreBtn")}</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="card bg-[#000000] w-80 lg:w-96 shadow-sm rounded-2xl m-auto 
                  transition-transform duration-300 ">
                                <figure className="px-10 pt-10">
                                    <img src={AOFPP} alt="Events" className="rounded-xl" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title uppercase">{t("event3Title")}</h2>
                                    <p>{t("event3Desc")}</p>
                                    <div className="card-actions">
                                        <NavLink to='/media#gallery' className="btn btn-primary pr-20 pl-20">{t("viewMoreBtn")}</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="card bg-[#000000] w-80 lg:w-96 shadow-sm rounded-2xl m-auto 
                  transition-transform duration-300 lg:hover:scale-105">
                                <figure className="px-10 pt-10">
                                    <img src="/_MG_8450.PNG" alt="Events" className="rounded-xl" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title uppercase">{t("event4Title")}</h2>
                                    <p>{t("event4Desc")}</p>
                                    <div className="card-actions">
                                        <NavLink to='/media#gallery' className="btn btn-primary pr-20 pl-20">{t("viewMoreBtn")}</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="card bg-[#000000] w-80 lg:w-96 shadow-sm rounded-2xl m-auto 
                  transition-transform duration-300 lg:hover:scale-105">
                                <figure className="px-10 pt-10">
                                    <img src="/access.jpg" alt="Events" className="rounded-xl" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title uppercase">{t("event5Title")}</h2>
                                    <p>{t("event5Desc")}</p>
                                    <div className="card-actions">
                                        <NavLink to='/media#gallery' className="btn btn-primary pr-20 pl-20">{t("viewMoreBtn")}</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="card bg-[#000000] w-80 lg:w-96 shadow-sm rounded-2xl m-auto 
                  transition-transform duration-300 lg:hover:scale-105">
                                <figure className="px-10 pt-10">
                                    <img src="/identity.jpg" alt="Events" className="rounded-xl" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title uppercase">{t("event6Title")}</h2>
                                    <p>{t("event6Desc")}</p>
                                    <div className="card-actions">
                                        <NavLink to='/media#gallery' className="btn btn-primary pr-20 pl-20">{t("viewMoreBtn")}</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="card bg-[#000000] w-80 lg:w-96 shadow-sm rounded-2xl m-auto 
                  transition-transform duration-300 lg:hover:scale-105">
                                <figure className="px-10 pt-10">
                                    <img src="/psalm-hymn.jpg" alt="Events" className="rounded-xl" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title uppercase">{t("event7Title")}</h2>
                                    <p>{t("event7Desc")}</p>
                                    <div className="card-actions">
                                        <NavLink to='/media#gallery' className="btn btn-primary pr-20 pl-20">{t("viewMoreBtn")}</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>









                </div>


            </div>

            <div className="text-center mb-16 pt-20">
                {/* Tagline */}
                <div className="mb-6">
                    <span className="inline-block px-6 py-3 bg-red-200 text-center text-red-600 font-semibold rounded-full text-sm tracking-wide">
                        {t("homologeoTagline")}
                    </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:p-10 pt-20">
                    <div>
                        <img
                            className=" w-85 sm:w-130 md:w-150 lg:w-270 h-150 object-cover border border-red-600 shadow-lg shadow-red-600 rounded-lg m-auto"
                            src="https://i.pinimg.com/1200x/8a/e9/06/8ae906e3c778b493bd6c0253fbcacc38.jpg" alt="Homologeo section" />
                    </div>

                    <div>
                        {/* Heading */}
                        <h2 className="text-4xl sm:text-5xl font-display font-bold text-dark mb-6 tracking-tight">
                            {t("homologeoTitle")}
                        </h2>

                        {/* Description */}
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12 p-5">
                            {t("homologeoDesc")}
                        </p>



                        <div className="flex items-center justify-center pt-10 lg:pt-0">
                            <NavLink
                                to="/About#homologeo-section"
                                className=" flex px-6 py-3 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition-colors duration-300"
                            >
                                {t("homologeoBtn")} <SquareArrowRightEnter className="ml-3" />
                            </NavLink>
                        </div>

                        <div>
                            <button className="font-display font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 inline-flex items-center justify-center gap-2 tracking-wide bg-red- text-white hover:shadow-red-glow focus:ring-primary transform hover:scale-105 active:scale-95 disabled:grayscale disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none px-10 py-5 text-xl">
                                <a target="_blank" rel="noopener noreferrer" href="https://web.facebook.com/profile.php?id=61556110006448">{t("followFacebookBtn")}</a>
                            </button>
                        </div>
                    </div>
                </div>


            </div>

            <div className="text-center pt-20 p-5 lg:p-10 bg-[#f5f3f3] rounded-3xl shadow-lg shadow-red-600 lg:m-4 mb-5">
                <div className="btn bg-red-200 text-center text-red-600 p-5 rounded-4xl ">
                    {t("upcomingEventsTitle")}
                </div>


                <p className="text-lg lg:text-xl text-center text-black pt-10">
                    {t("upcomingEventsDesc")}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 pt-20">
                    <div className="h-full">
                        <div className="card-elegant overflow-hidden cursor-pointer h-full flex flex-col group hover:shadow-xl  duration-300  bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8 md:p-10 hover:bg-white/10 transition-colors group w-full   shadow-lg shadow-[#000000] ">
                            {/* Top section */}
                            <div className="relative h-48 overflow-hidden shrink-0">
                                <div className="w-full h-full flex items-center justify-center text-white text-2xl font-bold bg-blue-500">
                                    S
                                </div>
                            </div>

                            {/* Body */}
                            <div className="p-6 flex flex-col flex-1">
                                <h3 className="text-xl font-semibold mb-3 text-gray-900 line-clamp-2">
                                    {t("monthlyServiceTitle")}
                                </h3>

                                {/* Details */}
                                <div className="space-y-2 mb-4 text-sm text-gray-600">
                                    <div className="flex items-center space-x-2">
                                        <Calendar className="w-4 h-4 text-gray-400" />
                                        <span>{t("monthlyServiceDate")}</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Clock className="w-4 h-4 text-gray-400" />
                                        <span>{t("monthlyServiceTime")}</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <div className="flex items-center space-x-2">
                                            <MapPin className="w-4 h-4 text-gray-400" />
                                            <span>{t("monthlyServiceLocation")}</span>
                                        </div>
                                        <button className="text-xs text-white bg-gray-500 hover:bg-gray-600 px-2 py-1 rounded transition-colors">
                                            {t("getDirectionsBtn")}
                                        </button>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-gray-700 mb-6 line-clamp-3">
                                    {t("monthlyServiceDesc")}
                                </p>

                                <div className="flex-1"></div>

                                {/* Action button */}
                                <button
                                    className="font-display font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 inline-flex items-center justify-center gap-2 tracking-wide bg-transparent hover:bg-primary text-primary hover:text-white border-2 border-primary focus:ring-primary transform hover:scale-105 active:scale-95 disabled:text-gray-500 disabled:border-gray-500 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-gray-500 disabled:transform-none px-6 py-3 text-base w-full"
                                    disabled
                                >
                                    {t("noDetailsBtn")}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-center pt-10 lg:pt-0">
                    <NavLink
                        to="/Event"
                        className=" flex px-6 py-3 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition-colors duration-300"
                    >
                        {t("viewEventPageBtn")} <SquareArrowRightEnter className="ml-3" />
                    </NavLink>
                </div>
            </div>



            <div className="text-center pb-10 pt-20 bg-[#000000] rounded-3xl">
                {/* Tagline */}
                <div className="mb-6">
                    <span className="inline-block px-6 py-3 bg-red-200 text-center text-red-600 font-semibold rounded-full text-sm tracking-wide">
                        {t("contactTagline")}
                    </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:p-10 pt-20">


                    <div>
                        {/* Heading */}
                        <h2 className="text-4xl sm:text-5xl font-display font-bold bg-linear-to-r from-red-900 via-yellow-600 to-pink-900 bg-clip-text text-transparent mb-6 tracking-tight">
                            {t("contactTitle")}
                        </h2>

                        {/* Description */}
                        <p className="text-xl text-white max-w-2xl mx-auto  mb-12 p-5">
                            {t("contactDesc")}
                        </p>



                        <div className="flex items-center justify-center pt-10 lg:pt-0">
                            <NavLink
                                to="/Contact#Prayer-Request"
                                className=" flex px-6 py-3 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition-colors duration-300"
                            >
                                {t("contactBtn")} <SquareArrowRightEnter className="ml-3" />
                            </NavLink>
                        </div>

                        <div>
                            <button className="font-display font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 inline-flex items-center justify-center gap-2 tracking-wide bg-red- text-white hover:shadow-red-glow focus:ring-primary transform hover:scale-105 active:scale-95 disabled:grayscale disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none px-10 py-5 text-xl">
                                <a target="_blank" rel="noopener noreferrer" href="https://web.facebook.com/profile.php?id=61556110006448">{t("followFacebookBtn")}</a>
                            </button>
                        </div>
                    </div>

                    <div>
                        <img
                            className=" w-85 sm:w-130 md:w-150 lg:w-270 h-150 object-center border border-red-600 shadow-lg shadow-red-600 rounded-2xl m-auto"
                            src="https://i.pinimg.com/1200x/86/a3/47/86a3479836bc571d11c42f4351362081.jpg" alt="Homologeo section" />
                    </div>

                </div>

            </div>


        </div>
    );
}