import { faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faChevronLeft,
  faChevronRight,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment } from "react";
import Package from "./Package";

export default function ReusePackage({
  packages,
  setCurrentPackage,
  currentPackage,
  activities,
  arrayActivity,
}) {
  return (
    <div className="grid xl:grid-cols-3 sm:grid-cols-2 gap-6 mt-9 relative">
      {packages.map((value) => (
        <Fragment key={value.image}>
          {currentPackage?.id + 3 > value?.id &&
            currentPackage?.id <= value?.id && (
              <Package
                Image={value.image}
                icon={faHeart}
                review={faStar}
                activities={
                  activities !== undefined
                    ? activities
                    : arrayActivity.filter((curr) => {
                        return value.activitiesID.includes(curr.id);
                      })[1].name
                }
                title={value.title}
                price={value.price}
              />
            )}
        </Fragment>
      ))}
      {currentPackage?.id === 0 || (
        <button
          type="button"
          onClick={() => {
            setCurrentPackage((curr) => {
              return packages[curr?.id - 1];
            });
          }}
          className="slide bg-white rounded-full flex justify-center px-5 py-4 absolute bottom-1/2 -left-5 drop-shadow-lg"
        >
          <FontAwesomeIcon
            className="text-green-600 text-xl"
            icon={faChevronLeft}
          />
        </button>
      )}
      {currentPackage?.id >= packages?.length - 3 || (
        <button
          type="button"
          onClick={() => {
            setCurrentPackage((curr) => {
              return packages[curr?.id + 1];
            });
          }}
          className="slide bg-white rounded-full flex justify-center px-5 py-4 absolute bottom-1/2 -right-5 drop-shadow-lg"
        >
          <FontAwesomeIcon
            className="text-green-600 text-xl"
            icon={faChevronRight}
          />
        </button>
      )}
    </div>
  );
}
