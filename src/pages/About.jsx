import { useTranslation } from "react-i18next";
import pastorimg from '../assets/pastorimg.png'
import { useState } from "react";
import { NavLink } from "react-router-dom";
import FloatingCard from "../components/FloatingCard";


export default function About() {
    const { t, } = useTranslation();
    const [open, setOpen] = useState(false);
    return (
        <>
            <section className="relative h-screen overflow-hidden bg-black">
                <div className="absolute inset-0">
                    <img
                        alt="Banner 2"
                        src="/Word-hero.jpeg"
                        className="object-cover absolute inset-0 w-full h-full"
                    />
                    <div className="absolute inset-0 bg-linear-to-r bg-black/80  to-transparent"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center max-w-4xl p-3">
                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 
                                    bg-linear-to-r from-red-500 via-yellow-500 to-pink-500 
                                    bg-clip-text text-transparent uppercase "
                            >
                                {t("aboutHeroTitle")}
                            </h1>

                            <p className="text-xl sm:text-2xl text-white/90 mb-10 ">
                                {t("aboutHeroSubtitle")}
                            </p>
                            <div className="flex justify-center gap-4 ">
                                <button className="px-6 py-3 bg-white/10 text-white border border-white/30 rounded-lg font-semibold">
                                    {t("aboutHeroButton")}
                                </button>

                            </div>
                        </div>

                    </div>
                    
                </div>

            </section>

            <FloatingCard />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-10 pt-20">
                {/* Left Column - Text */}
                <div>
                    <h2 className="text-3xl font-display font-bold text-red-600 mb-6">
                        {t("aboutTitle")}
                    </h2>

                    <div className="space-y-4 mb-6">
                        <p className="text-lg text-gray-400">
                            {t("aboutIntro1")}
                        </p>
                        <p className="text-lg text-gray-400">
                            {t("aboutIntro2")}
                        </p>
                    </div>

                    <div>
                        {/* Read More button */}
                        <button
                            onClick={() => setOpen(true)}
                            className="text-red-600 font-semibold hover:text-primary/80 transition-colors mb-4 block"
                        >
                            {t("readMoreButton")}
                        </button>

                        {/* Floating Modal */}
                        {open && (
                            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                                <div className="bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-lg shadow-lg">
                                    <div className="p-8">
                                        {/* Header */}
                                        <div className="flex justify-between items-start mb-6">
                                            <h3 className="text-3xl font-display font-bold text-gray-500">
                                                {t("aboutTitle")}
                                            </h3>
                                            <button
                                                onClick={() => setOpen(false)}
                                                className="text-gray-400 hover:text-gray-600 text-3xl"
                                            >
                                                ×
                                            </button>
                                        </div>

                                        {/* Content Grid */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            {/* Left Column */}
                                            <div className="space-y-4">
                                                <p className="text-gray-600 leading-relaxed">
                                                    {t("modalLeft1")}
                                                </p>
                                                <p className="text-gray-600 leading-relaxed">
                                                    {t("modalLeft2")}
                                                </p>
                                                <p className="text-gray-600 leading-relaxed">
                                                    {t("modalLeft3")}
                                                </p>
                                            </div>

                                            {/* Right Column */}
                                            <div className="space-y-4">
                                                <p className="text-gray-600 leading-relaxed">
                                                    {t("modalRight1")}
                                                </p>
                                                <p className="text-gray-600 leading-relaxed">
                                                    {t("modalRight2")}
                                                </p>
                                                <p className="text-gray-600 leading-relaxed">

                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Right Column - Image */}
                <div className="relative h-150 overflow-hidden">
                    <img
                        src="https://scontent.fcoo1-2.fna.fbcdn.net/v/t39.30808-6/828480955_122305963214203666_5455756936612491227_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1365&ctp=s2048x1365&_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeERCQwGuFOwBC-rwUSSfSMHQb3EiQu3VlBBvcSJC7dWUBOJElu4UT37-Vm1Su2JhMT1qD41kroiuf5xkWl8Psjb&_nc_ohc=XaVmh0p5FCAQ7kNvwGrD0KC&_nc_oc=Adpqi0VAveBPLUK4ibigbnRIFc04Si3Pey_ueq3i4Ks7p1Sy21VgnO87wjx5_CTWhKw&_nc_zt=23&_nc_ht=scontent.fcoo1-2.fna&_nc_gid=IlDq2zNAjbgt4fjnLO7XNg&_nc_ss=7a2a8&oh=00_AQOSl_t4Ghx8886sxYdfpUjeJW4FXCgUWtU10D_Qya3jsA&oe=6AD31A76" // replace with your actual image path
                        alt="The GLN community gathering for worship and fellowship"
                        className="object-cover absolute inset-0 w-full h-full  border-red-600 shadow-xl shadow-red-600 rounded-2xl m-auto"
                    />
                </div>
            </div>

            <div className="container-max bg-[#f8e7e7] p-10">
                {/* Section Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-display font-bold text-black pt-10 mb-4">
                        {t("missionVisionTitle")}
                    </h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 pb-20 gap-8">
                    {/* Mission */}
                    <div className="bg-white p-8 shadow-lg rounded-lg">
                        <h3 className="text-2xl font-display font-semibold text-primary mb-4">
                            {t("missionTitle")}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            {t("missionText")}
                        </p>
                    </div>

                    {/* Vision */}
                    <div className="bg-white p-8 shadow-lg rounded-lg">
                        <h3 className="text-2xl font-display font-semibold text-primary mb-4">
                            {t("visionTitle")}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            {t("visionText")}
                        </p>
                    </div>
                </div>
            </div>

            <div className="text-center p-5">
                <h1 className="font-bold text-5xl text-white pt-20">{t("leaderTitle")}</h1>
                <p className="text-lg pt-8 font-serif">
                    {t("leaderSubtitle")}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:p-10 pt-20">
                    <div className="relative h-150 overflow-hidden">
                        <img
                            src={pastorimg} // replace with your actual image path
                            alt="The GLN leader"
                            className="object-cover absolute inset-0 h-120 rounded-lg   w-full lg:h-full"
                        />
                    </div>

                    <div className="">
                        <h1 className="text-4xl lg:text-5xl text-center text-white font-serif">{t("leaderName")}</h1>
                        <p className="text-red-600 text-xl lg:text-2xl pt-3">{t("leaderRole")}</p>
                    </div>
                </div>
            </div>


            <div className="container-max bg-[#f8e7e7] p-10">
                {/* Section Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-display font-bold text-black pt-10 mb-4">
                        {t("coreValuesTitle")}
                    </h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 pb-20 gap-8">
                    {/* Mission */}
                    <div className="bg-white p-8 shadow-lg rounded-lg">
                        <h3 className="text-2xl font-display font-semibold text-primary mb-4">
                            {t("loveTitle")}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            {t("loveText")}
                        </p>
                    </div>

                    {/* Vision */}
                    <div className="bg-white p-8 shadow-lg rounded-lg">
                        <h3 className="text-2xl font-display font-semibold text-primary mb-4">
                            {t("honourTitle")}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            {t("honourText")}
                        </p>
                    </div>

                    {/* Vision */}
                    <div className="bg-white p-8 shadow-lg rounded-lg">
                        <h3 className="text-2xl font-display font-semibold text-primary mb-4">
                            {t("excellenceTitle")}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            {t("excellenceText")}
                        </p>
                    </div>

                    {/* Vision */}
                    <div className="bg-white p-8 shadow-lg rounded-lg">
                        <h3 className="text-2xl font-display font-semibold text-primary mb-4">
                            {t("spiritualityTitle")}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            {t("spiritualityText")}
                        </p>
                    </div>
                </div>
            </div>

            <div className="container-max  p-5 lg:p-10">
                {/* Section Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-display font-bold text-white pt-10 mb-4">
                        {t("homologeoTitle1")}
                    </h2>
                </div>

                {/* Grid */}
                <div className="flex justify-center pb-10 ">
                    {/* Mission */}
                    <div className="bg-white p-8 shadow-lg rounded-lg  border-red-600  shadow-red-600 ">

                        {t("homologeoDeclarations", { returnObjects: true }).map((line, index) => (
                            <p
                                key={index}
                                className="text-black font-serif leading-relaxed text-lg md:text-xl font-display font-semibold mb-1"
                            >
                                <span className="text-2xl md:text-2xl mr-2 text-red-600">
                                    {index + 1}.
                                </span>
                                {line}
                            </p>
                        ))}

                    </div>


                </div>
            </div>

            <section className="section-padding bg-gray-50 p-4">
                <div className="container-max text-center">
                    {/* Heading */}
                    <h2 className="text-3xl font-display font-bold text-black mb-6 pt-10">
                        {t("learnMoreTitle")}
                    </h2>

                    {/* Subtitle */}
                    <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                        {t("learnMoreSubtitle")}
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center pb-10">
                        <NavLink
                            to="/"
                            className="font-display font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 inline-flex items-center justify-center gap-2 tracking-wide bg-linear-to-r from-red-500 to-pink-500 text-white hover:shadow-red-glow focus:ring-primary transform hover:scale-105 active:scale-95 disabled:grayscale disabled:opacity-60 disabled:cursor-not-allowed px-8 py-4 text-lg"
                        >
                            {t("contactUsButton")}
                        </NavLink>
                    </div>
                </div>
            </section>

        </>
    );
}