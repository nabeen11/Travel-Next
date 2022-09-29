import React, { Fragment, useState } from "react";
import Slider1 from "/image/slider1.jpg";
import Slider2 from "/image/slider2.jpg";
import Slider3 from "/image/langtang.jpg";
import Slider4 from "/image/pokhara.jpg";
import Manakamana from "/image/manakamana.jpg";
import Kalinchowk from "/image/Kuri_Village.jpg";
import Rara from "/image/rara.jpg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const topDestination = [
  {
    id: 0,
    name: "Kathmandu",
    desc: "Kathmandu, Nepal's capital, is set in a valley surrounded by the Himalayan mountains. At the heart of the old city’s mazelike alleys is Durbar Square, which becomes frenetic during Indra Jatra, a religious festival featuring masked dances. Many of the city's historic sites were damaged or destroyed by a 2015 earthquake.",
    image: Slider1,
  },
  {
    id: 1,
    name: "Solukhumbu",
    desc: "This is Solukhumbu",
    image: Slider2,
  },
  {
    id: 2,
    name: "Langtang",
    desc: "This is Langtang",
    image: Slider3,
  },
  {
    id: 3,
    name: "Pokhara",
    desc: "This is Pokhara",
    image: Slider4,
  },
  {
    id: 4,
    name: "Rara lake",
    desc: "This is Rara Lake",
    image: Rara,
  },
  {
    id: 5,
    name: "Manakamana",
    desc: "This is Manakamana",
    image: Manakamana,
  },
  {
    id: 6,
    name: "Bhairawa",
    desc: "This is Bhairawa",
    image: Slider1,
  },
  {
    id: 7,
    name: "Kalinchowk",
    desc: "Kuri village (in Kalinchowk Rural Municipality) is a cluster of old stone houses and home to a wonderful family who’s lived there for decades. Kuri Village offers basic, traditional accommodation, and the family cuisine is delicious the way only village food can be. It’s first of all a great place to relax, breath fresh mountain air and read a couple of books.",
    image: Kalinchowk,
  },
];
export default function TopDestination() {
  const [currentDestination, setCurrentDestination] = useState(
    topDestination[0]
  );

  const topDestinationCurrent = (action) => {
    if (action === 0) {
      setCurrentDestination((curr) =>
        curr.id === 0
          ? topDestination[topDestination.length - 1]
          : topDestination[curr.id - 1]
      );
    } else if (action === 1) {
      setCurrentDestination((curr) =>
        curr.id === topDestination.length - 1
          ? topDestination[0]
          : topDestination[curr.id + 1]
      );
    }
  };
  return (
    <div className="h-[70vh] w-full mt-14 mb-20 relative">
      <img
        className="w-full h-full object-cover overflow-hidden absolute top-0 left-0"
        src={currentDestination.image}
        alt={currentDestination.name}
      />
      <div className="top-0 left-0 absolute bg-[#2c2626c2] h-full w-full"></div>
      <div className="flex w-full h-full items-center justify-center">
        <div className="w-full h-[50vh] grid grid-cols-12 z-30 absolute items-center justify-center">
          <div className="desti col-span-4 pl-[150px] pr-12">
            <p className="text-white text-xl tracking-wide uppercase font-normal">
              <span className="tracking-veryTight text-xl font-bold">
                --------
              </span>
              Top Destination
            </p>
            <h1 className="text-white text-6xl tracking-wide font-semibold mt-6">
              {currentDestination.name}
            </h1>
            <p className="text-white text-lg tracking-wide font-normal mt-6 mb-6">
              {currentDestination.desc}
            </p>
            <Link
              to={`/destinations/${currentDestination.name.toLowerCase()}`}
              className="h-auto w-auto text-white bg-green-500 px-2 py-2 rounded-md"
            >
              View Details
            </Link>
          </div>
          <div className="desti-slider col-span-8 space-y-5">
            <div className="flex overflow-hidden lg:gap-x-5 gap-x-2">
              {topDestination.map((curr, index) => (
                <Fragment key={curr.id}>
                  {index > currentDestination.id && (
                    <div>
                      <div className="relative">
                        <div className="relative h-72 w-64 overflow-hidden rounded-lg">
                          <img
                            src={curr.image}
                            alt={curr.name}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-start overflow-hidden rounded-lg p-4">
                          <div
                            aria-hidden="true"
                            className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                          />
                          <p className="relative text-lg font-semibold text-white">
                            {curr.name}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </Fragment>
              ))}
              {topDestination.map((curr, index) => (
                <Fragment key={curr.id}>
                  {index < currentDestination.id && (
                    <div>
                      <div className="relative">
                        <div className="relative h-72 w-64 overflow-hidden rounded-lg">
                          <img
                            src={curr.image}
                            alt={curr.name}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-start overflow-hidden rounded-lg p-4">
                          <div
                            aria-hidden="true"
                            className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                          />
                          <p className="relative text-lg font-semibold text-white">
                            {curr.name}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </Fragment>
              ))}
            </div>
            <div className="button-group space-x-6 text-end pr-28">
              <button
                type="button"
                onClick={() => topDestinationCurrent(0)}
                className="px-6 py-4 border border-white text-white rounded-full"
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              <button
                type="button"
                onClick={() => topDestinationCurrent(1)}
                className="px-6 py-4 border border-white text-white rounded-full"
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
