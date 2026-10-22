import {
  Play,
  Headphones,
  ImageIcon,
  
} from "lucide-react";

export default function Media() {
  const sermons = [
    {
      title: "The Power of Grace",
      speaker: "Apostle Ifeanyi Ewim",
      date: "October 2026",
      image: "/media1.jpg",
    },
    {
      title: "Understanding God's Love",
      speaker: "Apostle Ifeanyi Ewim",
      date: "September 2026",
      image: "/media2.jpg",
    },
    {
      title: "Faith That Works",
      speaker: "Apostle Ifeanyi Ewim",
      date: "August 2026",
      image: "/media3.jpg",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* HERO */}
      <section
        className="relative h-[70vh] flex items-center justify-center"
        style={{
          backgroundImage: "url('/media-banner.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative text-center text-white z-10">
          <h1 className="text-5xl lg:text-7xl font-bold mb-5">
            Media Center
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Watch, listen and grow through life-changing messages and resources.
          </p>
        </div>
      </section>

      {/* FEATURED MESSAGE */}
      <section className="py-20 px-5 lg:px-12">
        <h2 className="text-4xl font-bold text-center mb-12">
          Featured Message
        </h2>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <img
            src="/featured-sermon.jpg"
            alt="Featured Sermon"
            className="rounded-xl shadow-lg"
          />

          <div>
            <h3 className="text-3xl font-bold mb-5">
              Walking In Divine Favor
            </h3>

            <p className="text-gray-600 mb-8">
              Discover how God's grace empowers believers to live
              victorious lives.
            </p>

            <button className="flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700">
              <Play size={20} />
              Watch Now
            </button>
          </div>
        </div>
      </section>

      {/* MEDIA CATEGORIES */}

      <section className="py-12 px-5 lg:px-12">
        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-white p-8 rounded-xl shadow text-center">
            <Play size={40} className="mx-auto text-red-600 mb-4" />
            <h3 className="font-bold text-lg">Sermons</h3>
          </div>

          <div className="bg-white p-8 rounded-xl shadow text-center">
            <Headphones size={40} className="mx-auto text-red-600 mb-4" />
            <h3 className="font-bold text-lg">Podcasts</h3>
          </div>

          <div className="bg-white p-8 rounded-xl shadow text-center">
            <ImageIcon size={40} className="mx-auto text-red-600 mb-4" />
            <h3 className="font-bold text-lg">Photos</h3>
          </div>

          <div className="bg-white p-8 rounded-xl shadow text-center">
            
            <h3 className="font-bold text-lg">Videos</h3>
          </div>

        </div>
      </section>

      {/* RECENT MESSAGES */}

      <section className="py-20 px-5 lg:px-12">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Recent Messages
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
          {sermons.map((sermon, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={sermon.image}
                alt={sermon.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">
                <h3 className="font-bold text-xl mb-3">
                  {sermon.title}
                </h3>

                <p className="text-gray-500 mb-2">
                  {sermon.speaker}
                </p>

                <p className="text-sm text-gray-400">
                  {sermon.date}
                </p>

                <button className="mt-5 text-red-600 font-semibold">
                  Watch Message →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PHOTO GALLERY */}

      <section className="py-20 px-5 lg:px-12 bg-white">
        <h2 className="text-4xl font-bold text-center mb-12">
          Gallery
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <img src="/gallery1.jpg" className="rounded-lg" />
          <img src="/gallery2.jpg" className="rounded-lg" />
          <img src="/gallery3.jpg" className="rounded-lg" />
          <img src="/gallery4.jpg" className="rounded-lg" />
        </div>
      </section>

      {/* YOUTUBE CTA */}

      <section className="py-20 bg-red-600 text-white text-center">
        <h2 className="text-4xl font-bold mb-5">
          Stay Connected
        </h2>

        <p className="max-w-2xl mx-auto mb-8">
          Subscribe to our YouTube channel and never miss a message.
        </p>

        <button className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold">
          Subscribe Now
        </button>
      </section>

    </div>
  );
}