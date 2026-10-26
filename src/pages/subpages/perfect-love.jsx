import { NavLink } from "react-router-dom";
import { SquareArrowLeft } from "lucide-react";
import { useTranslation } from "react-i18next";



export default function PerfectLove() {
    const { t, } = useTranslation();
    return (
        <div>
            {/* Header Banner */}
            <div
                className="relative h-100 bg-cover bg-center flex flex-col justify-center items-center text-white 
                            bg-[url('/perfectlove-cover.png')]
                            lg:bg-[url('/PLBanner-tablet.png')]
                            md:bg-[url('/PLBanner-laptop.png')]"

            >

            </div>
            <div className="fixed bottom-4 left-4 flex items-start">
                <NavLink
                    to="/blog"
                    className="flex px-6 py-3 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition-colors duration-300"
                >
                    <SquareArrowLeft className="mr-2" /> {t("bblog")}
                </NavLink>
            </div>

            <div className="max-w-4xl m-auto text-center bg-white mt-5 rounded-box">

                <div className="flex items-center justify-between mb-6 flex-wrap gap-4 
                shadow-[0_0_15px_rgba(255,0,150,0.6),0_0_30px_rgba(255,0,150,0.4)] rounded-lg">
                    <h3 className=" md:text-4xl text-3xl lg:text-5xl font-[sans-serif] text-red-900 uppercase ml-20 p-5">
                        {t("perfectLoveTitle")}
                    </h3>

                    <p className="text-xl font-serif text-left tracking-wider text-black p-5">
                        {t("perfectLoveParagraph1")}
                    </p>




                    <p className="text-xl font-serif text-left tracking-wider text-black p-5">
                        {t("perfectLoveParagraph2")}
                    </p>

                    <div className="flex">
                        <div className="w-1 h-50 ml-5 bg-red-700"></div>
                        <div className="ml-5 text-left">
                            <h3 className="text-lg text-red-500 font-serif">{t("romans623Title")}</h3>
                            <p className="text-xl from-neutral-600 text-left tracking-wider text-black p-5">
                                {t("romans623Text")}
                            </p>
                        </div>
                    </div>

                    <p className="text-xl font-serif text-left tracking-wider text-black p-5">
                        {t("perfectLoveParagraph3")}
                    </p>

                    <div className="flex">
                        <div className="w-1 h-50 ml-5 bg-red-700"></div>
                        <div className="ml-5 text-left">
                            <h3 className="text-lg text-red-500 font-serif">{t("ephesians219Title")}</h3>
                            <p className="text-xl from-neutral-600 text-left tracking-wider text-black p-5">
                                {t("ephesians219Text")}
                            </p>
                        </div>
                    </div>

                    <p className="text-xl font-serif text-left tracking-wider text-black p-5">
                        {t("perfectLoveParagraph4")}
                    </p>

                    <p className="text-xl font-serif text-left tracking-wider text-black p-5">
                        {t("perfectLoveParagraph5")}
                    </p>

                    <div className="flex">
                        <div className="w-1 h-50 ml-5 bg-red-700"></div>
                        <div className="ml-5 text-left">
                            <h3 className="text-lg text-red-500 font-serif">{t("john316Title")}</h3>
                            <p className="text-xl from-neutral-600 text-left tracking-wider text-black p-5">
                                {t("john316Text")}
                            </p>
                        </div>
                    </div>

                    <p className="text-xl font-bold text-left tracking-wider text-black p-5">
                        <span className="font-serif text-red-500">
                            {t("perfectLovePrayerTitle")}
                        </span>
                        <br />
                        {t("perfectLovePrayer")}
                    </p>
                </div>


            </div>
        </div>
    );
}