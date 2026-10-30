import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { useTranslation } from "react-i18next";
import "swiper/css";
import "swiper/css/effect-fade";
import { NavLink } from "react-router-dom";


function HeroSection() {
    const message = "Hello, I'm charting from Godlife Network Website. I want to join the community and I would like to learn more about Godlife Network.";

    const whatsappUrl = `https://wa.me/+2348104081742?text=${encodeURIComponent(message)}`;
    const { t, } = useTranslation();
    return (
        <section className="relative h-120 sm:h-120 md:h-screen lg:h-screen overflow-hidden bg-black  border-red-600 shadow-lg shadow-red-600 ">
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 10000, disableOnInteraction: false }}
                effect="fade"
                modules={[Autoplay, EffectFade]}
                className="h-full"
                onSlideChange={(swiper) => {
                    swiper.slides.forEach((slide) => {
                        slide
                            .querySelectorAll(
                                ".slide-left, .slide-right, .slide-left-delay, .slide-right-delay"
                            )
                            .forEach((el) => el.classList.remove("active"));
                    });

                    const currentSlide = swiper.slides[swiper.activeIndex];

                    currentSlide
                        .querySelectorAll(
                            ".slide-left, .slide-right, .slide-left-delay, .slide-right-delay"
                        )
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
                                    bg-clip-text text-transparent uppercase slide-left"
                                >
                                    {t("heroTitle1")}
                                </h1>


                                <div className="flex justify-center gap-4 slide-right">
                                    <a target="_blank" rel="noopener noreferrer" href={whatsappUrl}>
                                        <button className="px-6 py-3 bg-white/10 text-white border border-white/30 rounded-lg font-semibold">
                                            {t("joinButton2")}
                                        </button>
                                    </a>
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
                                    bg-clip-text text-transparent uppercase slide-left">
                                    {t("heroTitle2")}
                                </h1>

                                <div className="flex justify-center gap-4 slide-right-delay">
                                    <a target="_blank" rel="noopener noreferrer" href={whatsappUrl}>
                                        <button className="px-6 py-3 bg-white/10 text-white border border-white/30 rounded-lg font-semibold">
                                            {t("joinButton2")}
                                        </button>
                                    </a>
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
                                    bg-clip-text text-transparent uppercase slide-left">
                                    {t("heroTitle3")}
                                </h1>

                                <div className="flex justify-center gap-4 slide-right-delay">
                                    <NavLink to='/Event'>
                                        <button className="px-6 py-3 bg-white/10 text-white border border-white/30 rounded-lg font-semibold">
                                            {t("joinButton3")}
                                        </button>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>


        </section>
    );
}

export default HeroSection