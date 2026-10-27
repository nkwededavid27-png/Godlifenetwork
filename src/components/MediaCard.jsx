import { Play, } from "lucide-react";

export default function MediaCard({ message }) {




  return (
    <div
      onClick={() => window.open(message.video, "_blank")}
      className="space-y-4 bg-white rounded-xl shadow-lg p-4 cursor-pointer"
    >
      <img
        src={message.poster}
        alt={message.title}
        className="w-full rounded-xl"
      />

      <h3 className="text-2xl text-black font-bold">{message.title}</h3>
      <p className="text-2xl text-black">{message.speaker}</p>

      <a
        href={message.video}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
      >
        <Play size={18} />
        Watch on YouTube
      </a>
    </div>
  );
}