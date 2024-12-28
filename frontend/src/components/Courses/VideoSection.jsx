import React from "react";

const VideoSection = ({ videoLink }) => (
  <section className="flex justify-center p-4">
    <div className="w-full max-w-3xl">
      <div className="relative pb-[56.25%] overflow-hidden rounded-lg shadow-lg">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={videoLink}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  </section>
);

export default VideoSection;
