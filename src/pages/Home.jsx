import HeroSection from "../components/HeroSection";
import { Globe, Heart, HeartPulse, SquareArrowRightEnter } from 'lucide-react'
import { Calendar, Clock, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";
import img1 from '../assets/img1.jpeg'
import AOFPP from '../assets/AOFPP.jpg'
import AOWF from '../assets/AOWF.jpg'
import { NavLink } from "react-router-dom";


export default function Home() {
    const { t, } = useTranslation();

    return (
        <div>
            <HeroSection />

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

                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-20 pb-20">
                    {/* Love */}
                    <div className="text-center group">
                        <div className="w-20 h-20 bg-red-900 rounded-3xl flex items-center justify-center mx-auto shadow-red-glow 
                    transition-transform duration-300 lg:group-hover:scale-110">
                            <Heart className="w-9 h-9 text-white" />
                        </div>
                        <h1 className="text-2xl font-black p-3">{t("loveTitle")}</h1>
                        <p className="text-sm">{t("loveDesc")}</p>
                    </div>

                    {/* Life */}
                    <div className="text-center group">
                        <div className="w-20 h-20 bg-red-900 rounded-3xl flex items-center justify-center mx-auto shadow-red-glow 
                    transition-transform duration-300 lg:group-hover:scale-110">
                            <HeartPulse className="w-9 h-9 text-white" />
                        </div>
                        <h1 className="text-2xl font-black p-3">{t("lifeTitle")}</h1>
                        <p className="text-sm">{t("lifeDesc")}</p>
                    </div>

                    {/* Impact */}
                    <div className="text-center group">
                        <div className="w-20 h-20 bg-red-900 rounded-3xl flex items-center justify-center mx-auto shadow-red-glow 
                    transition-transform duration-300 lg:group-hover:scale-110">
                            <Globe className="w-9 h-9 text-white" />
                        </div>
                        <h1 className="text-2xl font-black p-3">{t("impactTitle")}</h1>
                        <p className="text-sm">{t("impactDesc")}</p>
                    </div>
                </div>


            </div>

            <div className="text-center pt-20 p-5 lg:p-10 bg-[#f5f3f3] rounded-3xl ">
                <div className="btn bg-red-200 text-center text-red-600 p-5 rounded-4xl ">
                    {t("prevEventsTitle")}
                </div>


                <p className="text-lg lg:text-xl text-center text-black pt-10">
                    {t("prevEventsDesc")}
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 pt-20 pb-20">

                    <div className="card bg-base-100 w-85 lg:w-96 shadow-sm rounded-2xl m-auto 
                  transition-transform duration-300 lg:hover:scale-105">
                        <figure className="px-10 pt-10">
                            <img src={img1} alt="Events" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title uppercase">{t("event1Title")}</h2>
                            <p>{t("event1Desc")}</p>
                            <div className="card-actions">
                                <NavLink to='/Blog' className="btn btn-primary pr-20 pl-20">{t("viewMoreBtn")}</NavLink>
                            </div>
                        </div>
                    </div>

                    <div className="card bg-base-100 w-85 lg:w-96 shadow-sm rounded-2xl m-auto 
                  transition-transform duration-300 lg:hover:scale-105">
                        <figure className="px-10 pt-10">
                            <img src={AOWF} alt="Events" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title uppercase">{t("event2Title")}</h2>
                            <p>{t("event2Desc")}</p>
                            <div className="card-actions">
                                <NavLink to='/Blog' className="btn btn-primary pr-20 pl-20">{t("viewMoreBtn")}</NavLink>
                            </div>
                        </div>
                    </div>

                    <div className="card bg-base-100 w-85 lg:w-96 shadow-sm rounded-2xl m-auto 
                  transition-transform duration-300 lg:hover:scale-105">
                        <figure className="px-10 pt-10">
                            <img src={AOFPP} alt="Events" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title uppercase">{t("event3Title")}</h2>
                            <p>{t("event3Desc")}</p>
                            <div className="card-actions">
                                <NavLink to='/Blog' className="btn btn-primary pr-20 pl-20">{t("viewMoreBtn")}</NavLink>
                            </div>
                        </div>
                    </div>

                </div>


            </div>

            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 pt-30 pb-50">
                <div className="text-center">
                    <h1 className="lg:text-left text-5xl lg:text-5xl font-bold bg-linear-to-r from-red-500 via-yellow-500 to-pink-500 bg-clip-text text-transparent pb-4  pt-10 lg:pl-10">
                        {t("aboutTitle")}
                    </h1>

                    <p className="font-black m-7">{t("aboutDesc")}</p>
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

            <div className="text-center pt-20 p-5 lg:p-10 bg-[#f5f3f3] rounded-3xl ">
                <div className="btn bg-red-200 text-center text-red-600 p-5 rounded-4xl ">
                    {t("upcomingEventsTitle")}
                </div>
 

                <p className="text-lg lg:text-xl text-center text-black pt-10">
                    {t("upcomingEventsDesc")}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 pt-20">
                    <div className="h-full">
                        <div className="card-elegant overflow-hidden cursor-pointer h-full flex flex-col group hover:shadow-xl transition-shadow duration-300">
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

            <div className="text-center mb-16 pt-20">
                {/* Tagline */}
                <div className="mb-6">
                    <span className="inline-block px-6 py-3 bg-red-200 text-center text-red-600 font-semibold rounded-full text-sm tracking-wide">
                        {t("homologeoTagline")}
                    </span>
                </div>

                {/* Heading */}
                <h2 className="text-4xl sm:text-5xl font-display font-bold text-dark mb-6 tracking-tight">
                    {t("homologeoTitle")}
                </h2>

                {/* Description */}
                <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12">
                    {t("homologeoDesc")}
                </p>



                <div className="flex items-center justify-center pt-10 lg:pt-0">
                    <NavLink
                        to="/About"
                        className=" flex px-6 py-3 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition-colors duration-300"
                    >
                        {t("homologeoBtn")} <SquareArrowRightEnter className="ml-3" />
                    </NavLink>
                </div>

                <div>
                    <button className="font-display font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 inline-flex items-center justify-center gap-2 tracking-wide bg-red- text-white hover:shadow-red-glow focus:ring-primary transform hover:scale-105 active:scale-95 disabled:grayscale disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none px-10 py-5 text-xl">
                        <a href="">{t("followFacebookBtn")}</a>
                    </button>
                </div>
            </div>

            <div className="text-center mb-0 pt-20 bg-[#f5f3f3] rounded-3xl">
                {/* Tagline */}
                <div className="mb-6">
                    <span className="inline-block px-6 py-3 bg-red-200 text-center text-red-600 font-semibold rounded-full text-sm tracking-wide">
                        {t("contactTagline")}
                    </span>
                </div>

                {/* Heading */}
                <h2 className="text-4xl sm:text-5xl font-display font-bold bg-linear-to-r from-red-900 via-yellow-600 to-pink-900 bg-clip-text text-transparent mb-6 tracking-tight">
                    {t("contactTitle")}
                </h2>

                {/* Description */}
                <p className="text-xl text-black max-w-2xl mx-auto  mb-12 p-5">
                    {t("contactDesc")}
                </p>



                <div className="flex items-center justify-center pt-10 lg:pt-0">
                    <NavLink
                        to="/"
                        className=" flex px-6 py-3 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition-colors duration-300"
                    >
                        {t("contactBtn")} <SquareArrowRightEnter className="ml-3" />
                    </NavLink>
                </div>

                <div>
                    <button className="font-display font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 inline-flex items-center justify-center gap-2 tracking-wide bg-red- text-black hover:shadow-red-glow focus:ring-primary transform hover:scale-105 active:scale-95 disabled:grayscale disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none px-10 py-5 text-xl">
                        <a href="">{t("followFacebookBtn")}</a>
                    </button>
                </div>
            </div>
            

        </div>
    );
}