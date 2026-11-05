import {
  Play,
  ImageIcon,
  Video,

} from "lucide-react";




import MediaCard from '../components/MediaCard'
import Gallery from "../components/Gallery";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";




export default function Media() {

  const { t } = useTranslation();





  



  const mediaMessages = t("mediaMessages", {
    returnObjects: true,
  });




  return (
    <div className=" min-h-screen  border-red-600 shadow-lg shadow-red-600 ">

      {/* HERO */}
      <section
        className="relative h-[60vh]  flex items-center justify-center p-5 border-red-600 shadow-lg shadow-red-600"
        style={{
          backgroundImage: "url('/Join-hero1.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative  text-center z-10">
          <h1 className=" text-red-600 text-3xl md:text-6xl font-bold">
            {t("mediaHeroTitle")}
          </h1>

          <p className="text-sm md:text-xl font-serif max-w-2xl mx-auto pt-5">
            {t("mediaHeroSubtitle")}
          </p>
        </div>
      </section>

      {/* FEATURED MESSAGE */}
      <section className="py-20 px-5 lg:px-12 bg-white">
        <h2 className="text-4xl text-red-600 font-bold text-center mb-12">
          {t("featuredMessageTitle")}
        </h2>

        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* VIDEO */}
          <div className="space-y-4">
            <iframe
              className="w-full rounded-xl shadow-lg aspect-video"
              src="https://www.youtube.com/embed/HPoXAhseoIo"
              title="Christmas Carol"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />

            {/* CUSTOM CONTROLS */}
            
          </div>

          {/* TEXT */}
          <div>
            <h3 className="text-3xl text-gray-600 font-bold mb-5">
              {t("featuredVideoTitle")}
            </h3>

            <p className="text-gray-600 mb-8 font-serif">
              {t("featuredVideoDescription")}
            </p>

            
          </div>

        </div>
      </section>

      {/* MEDIA CATEGORIES */}

      <section className="py-12 px-5 lg:px-12">
        <div className="grid md:grid-cols-3 gap-6">

          <NavLink to='/blog#sermon' className="bg-white p-8 rounded-xl shadow text-center">
            <Play size={40} className="mx-auto text-red-600 mb-4" />
            <h3 className="font-bold text-gray-950 text-lg">
              {t("mediaCategorySermons")}
            </h3>
          </NavLink >


          <NavLink to='#gallery' className="bg-white p-8 rounded-xl shadow text-center">
            <ImageIcon size={40} className="mx-auto text-red-600 mb-4" />
            <h3 className="font-bold text-gray-950 text-lg">
              {t("mediaCategoryPhotos")}
            </h3>
          </NavLink >

          <NavLink to='#videos' className="bg-white p-8 rounded-xl shadow text-center">
            <Video size={40} className="mx-auto text-red-600 mb-4" />
            <h3 className="font-bold text-gray-950 text-lg">
              {t("mediaCategoryVideos")}

            </h3>
          </NavLink>

        </div>
      </section>

      {/* RECENT MESSAGES */}

      <section id="videos" className="py-20 px-5 lg:px-12">
        <h2 className="text-4xl text-red-600 font-bold mb-12 text-center">
          {t("recentMessagesTitle")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mediaMessages.map((message, index) => (
            <MediaCard key={index} message={message} />
          ))}
        </div>



      </section >

      {/* PHOTO GALLERY */}
      <div id='gallery'>
        < Gallery />
      </div>
      {/* YOUTUBE CTA */}

      < section className="py-20 bg-red-600 text-white text-center" >
        <h2 className="text-4xl font-bold mb-5">
          {t("youtubeTitle")}
        </h2>

        <p className="max-w-2xl mx-auto mb-8">
          {t("youtubeDescription")}
        </p>

        <a target="_blank" rel="noopener noreferrer" href="https://youtube.com/@godlifenetworkintl?si=uZbN94EzlnbOsHLS">
          <button className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold">
            {t("youtubeButton")}
          </button>
        </a>

      </section >

    </div >
  );
}