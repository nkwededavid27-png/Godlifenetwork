import plc from '../assets/perfectlove-cover.png'
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";



export default function BlogSection() {
    const { t, } = useTranslation();
    return (
        <div className=' border-red-600 shadow-lg shadow-red-600 '>
            <section className="relative h-[60vh]   md:h-screen lg:h-screen overflow-hidden bg-black border-red-600 shadow-lg shadow-red-600">
                <div className="absolute inset-0">
                    <img
                        alt="Banner 2"
                        src="/blog-banner.jpg"
                        className="object-cover absolute inset-0 w-full h-full"
                    />

                    <div className="absolute inset-0 bg-linear-to-r bg-black/80 to-transparent"></div>

                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center max-w-4xl p-3">

                            <div className="flex justify-center gap-4">
                                <button className="px-6 py-3 font-serif bg-white/10 text-white border border-white/30 rounded-lg font-semibold">
                                    {t("blogHeroButton")}
                                </button>
                            </div>

                            <h1
                                className="text-5xl font-serif sm:text-6xl lg:text-7xl font-bold mb-6
          bg-linear-to-r from-red-500 via-yellow-500 to-pink-500
          bg-clip-text text-transparent uppercase"
                            >
                                {t("blogHeroTitle")}
                            </h1>

                            <p className="text-xl sm:text-xl text-white/90 mb-10 font-serif">
                                {t("blogHeroSubtitle")}
                            </p>

                        </div>
                    </div>
                </div>
            </section>



            <section id='sermon' className="section-padding bg-white p-10">
                <div className="container-max space-y-16">
                    {/* Category Filter */}
                    <div className="space-y-4">
                        <div className="flex items-center justify-between flex-wrap gap-4">


                        </div>
                        <div className="flex flex-wrap gap-3">
                            <NavLink
                                to="/blog"
                                className="px-4 py-2 rounded-full text-sm font-medium transition-colors bg-gray-100 text-gray-700 hover:bg-gray-200"
                            >
                                {t("blogFilterAll")}
                            </NavLink>

                        </div>
                    </div>

                    {/* Articles */}
                    <div>
                        <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
                            <h3 className="text-xl font-semibold text-gray-900">
                                {t("blogArticlesTitle")}
                            </h3>
                            <p className="text-sm uppercase tracking-wide text-gray-400">
                                {t("blogPageInfo")}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Article Card */}
                            <div className="bg-black backdrop-blur-sm border border-white/10 rounded-lg group w-full md:w-100 lg:w-120 m-auto shadow-lg shadow-[#e7e7e8]">
                                <NavLink to="/blog/perfect-love">
                                    <div className="card-elegant overflow-hidden cursor-pointer h-full group">
                                        {/* Cover Image */}
                                        <div className="relative h-48 overflow-hidden">
                                            <img
                                                src={plc}
                                                alt="Cover image for Perfect love"
                                                className="object-cover transition-transform duration-300 group-hover:scale-105 absolute inset-0 w-full h-full"
                                            />
                                            <div className="absolute top-4 right-4">
                                                <span className="px-3 py-1 bg-primary-600 text-white rounded-full text-xs font-medium">
                                                    {t("perfectLoveCategory")}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Card Content */}
                                        <div className="p-6">
                                            <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                                                <div className="flex items-center space-x-1">
                                                    {/* Calendar Icon */}
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="14"
                                                        height="14"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        className="lucide lucide-calendar"
                                                    >
                                                        <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                                                        <line x1="16" x2="16" y1="2" y2="6"></line>
                                                        <line x1="8" x2="8" y1="2" y2="6"></line>
                                                        <line x1="3" x2="21" y1="10" y2="10"></line>
                                                    </svg>
                                                    <span>{t("perfectLoveDate")}</span>
                                                </div>
                                                <div className="flex items-center space-x-1">
                                                    {/* User Icon */}
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="14"
                                                        height="14"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        className="lucide lucide-user"
                                                    >
                                                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                                                        <circle cx="12" cy="7" r="4"></circle>
                                                    </svg>
                                                    <span>{t("perfectLoveAuthor")}</span>
                                                </div>
                                            </div>

                                            <h3 className="text-xl font-semibold mb-3 text-gray-200 group-hover:text-primary-600 transition-colors">
                                                {t("perfectLoveCardTitle")}
                                            </h3>
                                            <p className="text-gray-200 line-clamp-3">
                                                {t("perfectLoveCardDescription")}
                                            </p>
                                            <div className="mt-4 text-primary-600 font-medium text-sm group-hover:text-primary-700 transition-colors">
                                                {t("blogReadMore")}
                                            </div>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
}
