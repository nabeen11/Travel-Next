import React from "react";
import footbg from "/image/footbg.png";

import Ntb from "/image/ntb.png";
import Hra from "/image/hra.png";
import Keep from "/image/keep.png";
import Taan from "/image/taan.png";
import Nepal from "/image/nepal-gov.png";
import Nma from "/image/nma.png";

export default function Footer() {
  return (
    <div className="w-full mt-20 h-[573px] relative">
      <img
        className="w-full h-full object-cover object-top"
        src={footbg}
        alt="Footer"
      />
      <div className="overlay  w-full absolute top-0 left-0 bg-gradient-to-t from-white/70 to-white/100 h-1/2"></div>
      <div className="overlay h-1/2 w-full absolute bottom-0 left-0 opacity-70 bg-white"></div>
      <div className="absolute top-20 right-1/3 space-y-8">
        <p className="text-center text-xl text-gray-500 font-medium block">
          Our Association
        </p>
        <div className="flex justify-center gap-14">
          <img src={Ntb} alt="Our Partners" />
          <img src={Hra} alt="Our Partners" />
          <img src={Keep} alt="Our Partners" />
          <img src={Taan} alt="Our Partners" />
          <img src={Nepal} alt="Our Partners" />
          <img src={Nma} alt="Our Partners" />
        </div>
      </div>
      <div className="absolute grid grid-cols-10">
        <div className="col-span-4"></div>
        <div className="col-span-6"></div>
      </div>
    </div>
  );
}
