import {
  Play,
  Headphones,
  ImageIcon,
  Video,

} from "lucide-react";
import { Pause } from "lucide-react";
import { useRef } from "react";
import { useState } from "react";
import featuredvideo from '../assets/featured-Video-Cover.jpg'
import MediaCard from '../components/MediaCard'
import Gallery from "../components/Gallery";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";



export default function Media() {
  const videoRef = useRef(null);
  const { t } = useTranslation();
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const handlePlay = () => {
    videoRef.current.play();
    setIsPlaying(true);
  };

  const handlePause = () => {
    videoRef.current.pause();
    setIsPlaying(false);
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;

    if (video.duration) {
      const percentage =
        (video.currentTime / video.duration) * 100;

      setProgress(percentage);
    }
  };

  const handleSeek = (e) => {
    const video = videoRef.current;
    const value = e.target.value;

    video.currentTime =
      (video.duration * value) / 100;

    setProgress(value);
  };

  
  const mediaMessages = t("mediaMessages", {
    returnObjects: true,
  });




  return (
    <div className=" min-h-screen">

      {/* HERO */}
      <section
        className="relative h-[70vh] flex items-center justify-center p-5"
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

          <p className="text-sm md:text-xl font-[cursive] max-w-2xl mx-auto pt-5">
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
            <video
              ref={videoRef}
              className="w-full rounded-xl shadow-lg"
              poster={featuredvideo}
              onTimeUpdate={handleTimeUpdate}
            >
              <source
                src="/featured-vid2.mp4"
                type="video/mp4"
              />
            </video>

            {/* CUSTOM CONTROLS */}
            <div className="bg-gray-100 p-4 rounded-lg shadow">
              <div className="flex items-center gap-4">

                {isPlaying ? (
                  <button
                    onClick={handlePause}
                    className="bg-red-600 text-white p-3 rounded-full hover:bg-red-700"
                  >
                    <Pause size={20} />
                  </button>
                ) : (
                  <button
                    onClick={handlePlay}
                    className="bg-green-600 text-white p-3 rounded-full hover:bg-green-700"
                  >
                    <Play size={20} />
                  </button>
                )}

                {/* PROGRESS BAR */}
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={progress}
                  onChange={handleSeek}
                  className="w-full accent-red-600 cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* TEXT */}
          <div>
            <h3 className="text-3xl text-gray-600 font-bold mb-5">
              {t("featuredVideoTitle")}
            </h3>

            <p className="text-gray-600 mb-8 font-serif">
              {t("featuredVideoDescription")}
            </p>

            <button
              onClick={handlePlay}
              className="flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700"
            >
              <Play size={20} />
              {t("watchNowButton")}
            </button>
          </div>

        </div>
      </section>

      {/* MEDIA CATEGORIES */}

      <section className="py-12 px-5 lg:px-12">
        <div className="grid md:grid-cols-4 gap-6">

          <NavLink to='/blog#sermon' className="bg-white p-8 rounded-xl shadow text-center">
            <Play size={40} className="mx-auto text-red-600 mb-4" />
            <h3 className="font-bold text-gray-950 text-lg">
              {t("mediaCategorySermons")}
            </h3>
          </NavLink >

          <NavLink to='' className="bg-white p-8 rounded-xl shadow text-center">
            <Headphones size={40} className="mx-auto text-red-600 mb-4" />
            <h3 className="font-bold text-gray-950 text-lg">
              {t("mediaCategoryPodcasts")}
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