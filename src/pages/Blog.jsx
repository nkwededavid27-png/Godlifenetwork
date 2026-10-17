
import FloatingCard from "../components/FloatingCard";


export default function BlogSection() {

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

                </div>

            </section>

            <FloatingCard />
        </>
    );
}
