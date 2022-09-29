import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Package({
  Image,
  icon,
  review,
  activities,
  title,
  price,
}) {
  return (
    <div className="rounded-xl px-2 py-2 border border-gray-200 shadow-lg h-auto">
      <div className="image relative  h-56">
        <a href="#">
          <img
            className="rounded-xl object-cover bg-cover w-full h-full"
            src={Image}
            alt="Package Image"
          />
        </a>
        <div className="reaction bg-white w-6 rounded-full flex justify-center px-6 py-3 absolute top-2 right-3">
          <FontAwesomeIcon className="text-green-600 text-2xl" icon={icon} />
        </div>
        {activities && (
          <div className="activities absolute -mt-5 bg-[#323c52] w-auto text-center rounded-md ml-5">
            <h1 className="text-white font-normal uppercase text-base px-2 py-2">
              {activities}
            </h1>
          </div>
        )}
      </div>
      <div className={`details pb-3 ${activities ? "mt-7" : "mt-2"}`}>
        <a href="#" className="font-medium text-xl ml-3">
          {title}
        </a>
        <span className="ml-3 mt-1 flex items-center space-x-1">
          <FontAwesomeIcon className="text-yellow-500" icon={review} />
          <FontAwesomeIcon className="text-yellow-500" icon={review} />
          <FontAwesomeIcon className="text-yellow-500" icon={review} />
          <FontAwesomeIcon className="text-yellow-500" icon={review} />
          <FontAwesomeIcon className="text-yellow-500" icon={review} />
          <p>(50 Reviews)</p>
        </span>
        <span className="flex items-center font-medium text-xl ml-3">
          {price} <p className="font-normal text-sm ml-2"> / Person</p>
        </span>
      </div>
    </div>
  );
}
