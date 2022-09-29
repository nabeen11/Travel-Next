import React from "react";
import Slider1 from "/image/slider1.jpg";
import Slider2 from "/image/slider2.jpg";
import Slider4 from "/image/pokhara.jpg";

import Arrowup from "/image/arrow-up-right.svg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Blog() {
  return (
    <div className="w-10/12 mx-auto sm:w-9/12 md:w-8/12 mt-28">
      <h1 className="text-3xl font-medium ">Our Latest News, Blogs & More..</h1>
      <div className="blogs grid grid-cols-1 md:grid-cols-2 mt-8 gap-8">
        <div className="space-y-4">
          <img
            className="rounded-xl mb-4 h-72 w-full"
            src={Slider1}
            alt="Blog 1"
          />
          <Link className="text-xl font-semibold" to="#">
            Travel law passed this year.
          </Link>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            sagittis neque et sem consequat, tempor maximus justo posuere.
          </p>
          <Link
            to="#"
            className="flex items-center gap-2 text-green-600 font-semibold text-lg"
          >
            Read post <img src={Arrowup}></img>
          </Link>
        </div>
        <div className="double space-y-6">
          <div className="one flex justify-between gap-4 items-center">
            <img className="rounded-xl mb-4 h-44" src={Slider2} alt="Blog 1" />
            <div className="content space-y-2">
              <Link className="text-xl font-semibold" to="#">
                Visit Mt. Everest 2022
              </Link>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                sagittis neque
              </p>
              <Link
                to="#"
                className="flex items-center gap-2 text-green-600 font-semibold text-lg"
              >
                Read post <img src={Arrowup}></img>
              </Link>
            </div>
          </div>
          <div className="flex justify-between gap-4 items-center">
            <img className="rounded-xl mb-4 h-44" src={Slider4} alt="Blog 1" />
            <div className="content space-y-2">
              <Link className="text-xl font-semibold" to="#">
                Visit Pokhara 2022
              </Link>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                sagittis neque
              </p>
              <Link
                to="#"
                className="flex items-center gap-2 text-green-600 font-semibold text-lg"
              >
                Read post <img src={Arrowup}></img>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="read-all flex justify-center mt-8">
        <Link to="#" className="gap-2 text-green-600 font-semibold text-lg">
          Read post <FontAwesomeIcon icon={faArrowRight} />
        </Link>
      </div>
    </div>
  );
}
