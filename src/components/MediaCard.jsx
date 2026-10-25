import { useRef, useState } from "react";
import { Play, Pause } from "lucide-react";

export default function MediaCard({ message }) {
  const videoRef = useRef(null);

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
      setProgress(
        (video.currentTime / video.duration) * 100
      );
    }
  };

  const handleSeek = (e) => {
    const value = e.target.value;

    const video = videoRef.current;

    video.currentTime =
      (video.duration * value) / 100;

    setProgress(value);
  };

  return (
    <div className="space-y-4 bg-white rounded-xl shadow-lg p-4">
      <video
        ref={videoRef}
        className="w-full  rounded-xl"
        poster={message.poster}
        onTimeUpdate={handleTimeUpdate}
      >
        <source src={message.video} type="video/mp4" />
      </video>

      <div className="bg-gray-100 p-4 rounded-lg">
        <h3 className="text-2xl text-gray-700 font-bold mb-2">
          {message.title}
        </h3>

        <p className="text-gray-500 mb-4">
          {message.speaker}
        </p>

        <div className="flex items-center gap-4">
          {isPlaying ? (
            <button
              onClick={handlePause}
              className="bg-red-600 text-white p-3 rounded-full"
            >
              <Pause size={18} />
            </button>
          ) : (
            <button
              onClick={handlePlay}
              className="bg-green-600 text-white p-3 rounded-full"
            >
              <Play size={18} />
            </button>
          )}

          <input
            type="range"
            min="0"
            max="100"
            value={progress}
            onChange={handleSeek}
            className="w-full accent-red-600"
          />
        </div>
      </div>
    </div>
  );
}