import { useTranslation } from "react-i18next";

// Example data arrays
const categories = [
    { name: "All", href: "", active: false },
    { name: "Identity", href: "?category=identity", active: true },
    { name: "Faith", href: "?category=faith", active: false },
];

const articles = [
    {
        id: 1,
        title: "LOVE. LIFE. IMPACT.",
        description:
            "How God's Love Sustains, Transforms, and Empowers Us to Influence the World",
        category: "Identity",
        date: "July 1, 2025",
        author: "Dr. Flourish Peters",
        href: "/blog/love-life-impact",
        image:
            "https://logicchurch-cms.s3.eu-west-2.amazonaws.com/medium_love_life_impact_7e005f638f.png",
    },
    {
        id: 2,
        title: "Faith in Action",
        description: "Living out your faith daily with courage and love.",
        category: "Faith",
        date: "August 15, 2025",
        author: "Jane Doe",
        href: "/blog/faith-in-action",
        image:
            "https://via.placeholder.com/600x400.png?text=Faith+in+Action", // example placeholder
    },
];

export default function BlogSection() {
    const { t, } = useTranslation();
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
                            <div className="flex justify-center gap-4 ">
                                <button className="px-6 py-3 bg-white/10 text-white border border-white/30 rounded-lg font-semibold">
                                    Our Blog page
                                </button>

                            </div>
                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 
                                    bg-linear-to-r from-red-500 via-yellow-500 to-pink-500 
                                    bg-clip-text text-transparent uppercase "
                            >
                                GLN Blog
                            </h1>

                            <p className="text-xl sm:text-xl text-white/90 mb-10 ">
                                Articles grounded in the finished work of Christ—crafted to help you grow in grace, hope, and purpose.
                            </p>

                        </div>

                    </div>
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
                </div>

            </section>

          
        </>
    );
}
