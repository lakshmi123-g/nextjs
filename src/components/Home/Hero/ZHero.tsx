import React from "react";

const ZHero = () => {
  return (
    <div className="relative w-full h-[120vh] sm:h-[100vh]">
      <div className="absolute top-o left-0 w-full h-full bg-gray-800 opacity-70">
        <video
          src="/images/hero1.mp4"
          autoPlay
          muted
          loop
          preload="metadata"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default ZHero;
