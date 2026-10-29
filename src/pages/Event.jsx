import { useTranslation } from "react-i18next";


export default function Event() {
    const { t, } = useTranslation();
    return (
        <main className="min-h-screen ">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-linear-to-r from-red-500 via-pink-500 to-orange-500 text-white flex items-center pt-32 pb-16 md:pt-40 md:pb-24 min-h-[50vh]">
                <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
                <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

                <div className="container-max relative z-10 w-full">
                    <div className="text-center max-w-4xl mx-auto px-4">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6 tracking-tight leading-tight flex items-center justify-center gap-4">
                            <span className="inline-block">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24" height="24"
                                    viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor"
                                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-white"
                                >
                                    <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                                    <line x1="16" x2="16" y1="2" y2="6"></line>
                                    <line x1="8" x2="8" y1="2" y2="6"></line>
                                    <line x1="3" x2="21" y1="10" y2="10"></line>
                                </svg>
                            </span>
                            {t("upcomingEventsTitle1")}
                        </h1>

                        <div className="flex justify-center mt-8">
                            <button className="font-display font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 inline-flex items-center justify-center gap-2 tracking-wide px-4 py-2 text-sm bg-white/10 border border-white/20 text-white hover:bg-white/20 backdrop-blur-sm" disabled>
                                <span className="shrink-0">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18" height="18"
                                        viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor"
                                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                    >
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                        <polyline points="7 10 12 15 17 10"></polyline>
                                        <line x1="12" x2="12" y1="15" y2="3"></line>
                                    </svg>
                                </span>
                                {t("addCalendarButton")}
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            

            <div className="space-y-16 pt-20 p-10">
                {/* Timeline Header */}
                <div className="relative">
                    <div className="absolute left-4 lg:left-8 top-12 lg:top-16 bottom-0 w-px bg-gray-200"></div>
                    <div className="flex items-center gap-4 lg:gap-6 mb-8 lg:mb-10">
                        <div className="flex items-center justify-center w-10 h-10 lg:w-16 lg:h-16 rounded-full bg-white border-2 lg:border-4 border-gray-50 shadow-sm z-10 relative">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24" height="24"
                                viewBox="0 0 24 24"
                                fill="none" stroke="currentColor"
                                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                className="w-4 h-4 lg:w-6 lg:h-6 text-black"
                            >
                                <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                                <line x1="16" x2="16" y1="2" y2="6"></line>
                                <line x1="8" x2="8" y1="2" y2="6"></line>
                                <line x1="3" x2="21" y1="10" y2="10"></line>
                            </svg>
                        </div>
                        <h2 className="text-xl lg:text-3xl font-display font-bold text-gray-900 sticky top-24 bg-gray-50/95 backdrop-blur-sm py-2 px-4 rounded-xl z-20 inline-block shadow-sm border border-gray-100/50">
                            {t("timelineMonth")}
                        </h2>
                    </div>



                    {/* Event Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 pl-12 lg:pl-24">
                        {/* Event Card 1 */}
                        <div className="group relative overflow-hidden  transition-all duration-300 flex flex-col h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg  hover:bg-white/10  group w-full   shadow-lg shadow-[#e7e7e8] ">
                            <div className="h-2 w-full relative overflow-hidden bg-purple-500">
                                <div className="absolute inset-0 opacity-50 group-hover:opacity-0 transition-opacity duration-300 bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.4)_0px,rgba(255,255,255,0.4)_8px,transparent_8px,transparent_24px)]"></div>
                            </div>
                            <div className="p-6 flex-1 flex flex-col">
                                <div className="flex justify-between items-start mb-5">
                                    <div className="flex flex-col items-center justify-center w-14 h-14 bg-gray-50 rounded-lg border border-gray-100 group-hover:bg-gray-100 transition-all duration-300">
                                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Oct</span>
                                        <span className="text-lg font-bold text-gray-900 leading-none mt-0.5">29</span>
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg font-bold text-gray-50 mb-2 group-hover:text-primary-600 transition-colors leading-tight">
                                        {t("event1Title1")}
                                    </h3>
                                    <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-gray-50 mb-4">
                                        <div className="flex items-center font-medium">
                                            <svg className="w-3.5 h-3.5 mr-1.5 text-gray-50" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                <circle cx="12" cy="12" r="10"></circle>
                                                <polyline points="12 6 12 12 16 14"></polyline>
                                            </svg>
                                            {t("event1DateTime")}
                                        </div>
                                        <div className="flex items-center font-medium">
                                            <svg className="w-3.5 h-3.5 mr-1.5 text-gray-50" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                                <circle cx="12" cy="10" r="3"></circle>
                                            </svg>
                                            {t("event1Location")}
                                        </div>
                                    </div>
                                    <p className="text-gray-50 text-sm leading-relaxed line-clamp-2 mb-6 cursor-help">
                                        {t("event1Description")}
                                    </p>
                                </div>
                                <div className="flex items-center justify-between pt-5 border-t border-gray-50 mt-auto">
                                    <button className="flex items-center text-xs font-medium text-gray-500 hover:text-gray-900 transition-colors py-2">
                                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path d="M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"></path>
                                            <line x1="16" x2="16" y1="2" y2="6"></line>
                                            <line x1="8" x2="8" y1="2" y2="6"></line>
                                            <line x1="3" x2="21" y1="10" y2="10"></line>
                                            <line x1="19" x2="19" y1="16" y2="22"></line>
                                            <line x1="16" x2="22" y1="19" y2="19"></line>
                                        </svg>

                                    </button>
                                    <button disabled className="flex items-center text-xs font-bold text-gray-400 cursor-not-allowed">
                                        {t("event2ViewDetails")}
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="group  relative overflow-hidden  transition-all duration-300 flex flex-col h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg  hover:bg-white/10  group w-full   shadow-lg shadow-[#e7e7e8] ">
                            <div className="h-2 w-full relative overflow-hidden bg-green-500">
                                <div className="absolute inset-0 opacity-50 group-hover:opacity-0 transition-opacity duration-300 bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.4)_0px,rgba(255,255,255,0.4)_8px,transparent_8px,transparent_24px)]"></div>
                            </div>
                            <div className="p-6 flex-1 flex flex-col">
                                <div className="flex justify-between items-start mb-5">
                                    <div className="flex flex-col items-center justify-center w-14 h-14 bg-gray-50 rounded-lg border border-gray-100 group-hover:bg-gray-100 transition-all duration-300">
                                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Nov</span>
                                        <span className="text-lg font-bold text-gray-900 leading-none mt-0.5">26</span>
                                    </div>
                                    
                                </div>

                                <div className="flex-1">
                                    <h3 className="text-lg font-bold text-gray-50 mb-2 group-hover:text-primary-600 transition-colors leading-tight">
                                        {t("event2Title1")}
                                    </h3>
                                    <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-gray-50 mb-4">
                                        <div className="flex items-center font-medium">
                                            <svg className="w-3.5 h-3.5 mr-1.5 text-gray-50" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                <circle cx="12" cy="12" r="10"></circle>
                                                <polyline points="12 6 12 12 16 14"></polyline>
                                            </svg>
                                            {t("event2DateTime")}
                                        </div>
                                        <div className="flex items-center font-medium">
                                            <svg className="w-3.5 h-3.5 mr-1.5 text-gray-50" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                                <circle cx="12" cy="10" r="3"></circle>
                                            </svg>
                                            {t("event2Location")}
                                        </div>
                                    </div>
                                    <p className="text-gray-50 text-sm leading-relaxed line-clamp-2 mb-6 cursor-help">
                                        {t("event2Description")}
                                    </p>
                                </div>

                                <div className="flex items-center justify-between pt-5 border-t border-gray-50 mt-auto">
                                    <button className="flex items-center text-xs font-medium text-gray-50 hover:text-gray-900 transition-colors py-2" title="Add to Calendar">
                                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path d="M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"></path>
                                            <line x1="16" x2="16" y1="2" y2="6"></line>
                                            <line x1="8" x2="8" y1="2" y2="6"></line>
                                            <line x1="3" x2="21" y1="10" y2="10"></line>
                                            <line x1="19" x2="19" y1="16" y2="22"></line>
                                            <line x1="16" x2="22" y1="19" y2="19"></line>
                                        </svg>
                                        <span className="hidden sm:inline">{t("event2AddCalendar")}</span>
                                    </button>
                                    <button className="flex items-center text-xs font-bold text-primary-600 hover:text-primary-700">
                                        {t("event2ViewDetails")}
                                        <svg className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path d="M5 12h14"></path>
                                            <path d="m12 5 7 7-7 7"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Regular Services Section */}
            <div className="w-full bg-linear-to-br from-gray-900 to-gray-900 py-20 md:py-32 text-white relative overflow-hidden mt-10">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-500/15 rounded-full blur-3xl -ml-48 -mb-48"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
                            {t("regularServicesTitle")}
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                            {t("regularServicesSubtitle")}
                        </p>
                    </div>

                    <div className="flex justify-center grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">

                        {/* monthly service */}
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8 md:p-10 hover:bg-white/10 transition-colors group w-full   shadow-lg shadow-[#e7e7e8] ">
                            <div className="flex items-start gap-6">
                                <div className="w-14 h-14 rounded-lg bg-red-500/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24" height="24"
                                        viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor"
                                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                        className="w-7 h-7 text-red-400"
                                    >
                                        <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                                        <line x1="16" x2="16" y1="2" y2="6"></line>
                                        <line x1="8" x2="8" y1="2" y2="6"></line>
                                        <line x1="3" x2="21" y1="10" y2="10"></line>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-4">{t("monthlyServicesTitle")}</h3>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3 text-gray-300">
                                            <span className="text-sm font-medium px-3 py-1 rounded bg-white/10 tracking-wide uppercase">{t("monthlyServicesSchedule")}</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-gray-300">
                                            <span className="text-white font-semibold">{t("monthlyServicesTime")}</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}