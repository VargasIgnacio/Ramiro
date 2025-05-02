import React from "react";
import Squares from '../blocks/Backgrounds/Squares/Squares';

const Background = () => {
  return (
    <div className="relative w-full h-full">
      {/* Canvas animado */}
      <Squares speed={0.5} squareSize={40} borderColor="rgba(255,255,255,0.03)" />

      {/* Vignette overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_40%,black_100%)] opacity-40" />
    </div>
  );
};

export default Background;
