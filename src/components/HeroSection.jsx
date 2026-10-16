import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { useTranslation } from "react-i18next";
import "swiper/css";
import "swiper/css/effect-fade";


function HeroSection() {
    const { t, } = useTranslation();
    return (
        <section className="relative h-screen overflow-hidden bg-black  border-red-600 shadow-lg shadow-red-600 ">
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 10000, disableOnInteraction: false }}
                effect="fade"
                modules={[Autoplay, EffectFade]}
                className="h-full"
                onSlideChange={(swiper) => {
                    // remove active from all slides
                    swiper.slides.forEach((slide) => {
                        slide.querySelectorAll(".slide-up, .slide-up-delay, .slide-up-delay2")
                            .forEach((el) => el.classList.remove("active"));
                    });

                    // add active to current slide
                    const currentSlide = swiper.slides[swiper.activeIndex];
                    currentSlide.querySelectorAll(".slide-up, .slide-up-delay, .slide-up-delay2")
                        .forEach((el) => el.classList.add("active"));
                }}

            >
                {/* Slide 1 */}
                <SwiperSlide>
                    <div className="absolute inset-0">
                        <img
                            alt="Banner 1"
                            src="/Word-hero.jpeg"
                            className="object-cover absolute inset-0 w-full h-full"
                        />
                        <div className="absolute inset-0 bg-linear-to-r bg-black/80  to-transparent"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center max-w-4xl p-3">
                                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 
                                    bg-linear-to-r from-red-500 via-yellow-500 to-pink-500 
                                    bg-clip-text text-transparent uppercase slide-up"
                                >
                                    {t("heroTitle1")}
                                </h1>

                                <p className="text-xl sm:text-2xl text-white/90 mb-10 slide-up-delay">
                                    {t("heroSubtitle1")}
                                </p>
                                <div className="flex justify-center gap-4 slide-up-delay2">
                                    <button className="px-6 py-3 bg-white/10 text-white border border-white/30 rounded-lg font-semibold">
                                        {t("joinButton1")}
                                    </button>
                                    <button className="px-6 py-3 bg-white/10 text-white border border-white/30 rounded-lg font-semibold">
                                        {t("watchButton1")}
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 2 */}
                <SwiperSlide>
                    <div className="absolute inset-0">
                        <img
                            alt="Banner 2"
                            src="/join-hero.jpeg"
                            className="object-cover absolute inset-0 w-full h-full"
                        />
                        <div className="absolute inset-0 bg-linear-to-r bg-black/80  to-transparent"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center max-w-4xl p-3">
                                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 
                                    bg-linear-to-r from-red-700 via-yellow-500 to-pink-500 
                                    bg-clip-text text-transparent uppercase slide-up">
                                    {t("heroTitle2")}
                                </h1>
                                <p className="text-xl sm:text-2xl text-white/90 mb-10 slide-up-delay">
                                    {t("heroSubtitle2")}
                                </p>
                                <div className="flex justify-center gap-4 slide-up-delay2">
                                    <button className="px-6 py-3 bg-white/10 text-white border border-white/30 rounded-lg font-semibold">
                                        {t("joinButton2")}
                                    </button>
                                    <button className="px-6 py-3 bg-white/10 text-white border border-white/30 rounded-lg font-semibold">
                                        {t("watchButton2")}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 3 */}
                <SwiperSlide>
                    <div className="absolute inset-0">
                        <img
                            alt="Banner 3"
                            src="/Join-hero1.jpeg"
                            className="object-cover absolute inset-0 w-full h-full"
                        />
                        <div className="absolute inset-0 bg-linear-to-r bg-black/80  to-transparent"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center max-w-4xl p-3">
                                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 
                                    bg-linear-to-r from-red-500 via-yellow-500 to-pink-500 
                                    bg-clip-text text-transparent uppercase slide-up">
                                    {t("heroTitle3")}
                                </h1>
                                <p className="text-xl sm:text-2xl text-white/90 mb-10 slide-up-delay">
                                    {t("heroSubtitle3")}
                                </p>
                                <div className="flex justify-center gap-4 slide-up-delay2">
                                    <button className="px-6 py-3 bg-white/10 text-white border border-white/30 rounded-lg font-semibold">
                                        {t("joinButton3")}
                                    </button>
                                    <button className="px-6 py-3 bg-white/10 text-white border border-white/30 rounded-lg font-semibold">
                                        {t("watchButton3")}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white z-10">
                <div className="flex flex-col items-center space-y-2">
                    <span className="text-sm font-medium tracking-wider uppercase opacity-80">
                        {t("Scroll")}
                    </span>
                    <div className="w-6 h-12 border-2 border-white/40 rounded-full flex justify-center relative">
                        <div className="w-1.5 h-4 bg-white/80 rounded-full mt-2 animate-bounce"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
