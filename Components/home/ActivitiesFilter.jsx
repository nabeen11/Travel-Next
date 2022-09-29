import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import ReusePackage from "../common/ReusePackage";
import About from "/image/about-img.png";

export default function ActivitiesFilter({ arrayActivity, packages }) {
  const [arrayActivityPackage, setArrayActivityPackage] = useState(packages);
  const [currentActivityPackage, setCurrentActivityPackage] = useState(
    arrayActivityPackage[0]
  );
  const [currentActivity, setCurrentActivity] = useState(arrayActivity[0]);

  useEffect(() => {
    let temp = packages
      .filter((curr) => {
        return curr.activitiesID?.includes(currentActivity?.id);
      })
      .map((curr, i) => {
        return { ...curr, id: i };
      });
    setArrayActivityPackage(temp);
    setCurrentActivityPackage(temp[0]);
  }, [currentActivity]);
  return (
    <>
      <div className="w-10/12 mx-auto sm:w-9/12 md:w-8/12 mt-16">
        <div>
          <h2 className="font-medium text-3xl">Things To Do </h2>
          <div className="flex pt-10 justify-between activities-group">
            <div className="activities space-x-3">
              {arrayActivity?.map((value) => (
                <button
                  key={value?.id}
                  type="button"
                  onClick={() => {
                    setCurrentActivity(value);
                  }}
                  className={`text-base px-4 py-[10px] rounded-lg ${
                    currentActivity?.id === value?.id
                      ? "bg-[#19a948] text-white"
                      : "border border-gray-600 text-gray-600"
                  }`}
                >
                  {value.name}
                </button>
              ))}
            </div>
            <div className="view my-auto">
              <Link
                to="/activities"
                className="border justify-end border-green-600 text-green-600 text-base px-3 py-[10px] rounded-lg"
              >
                View All
                <FontAwesomeIcon
                  icon={faLongArrowAltRight}
                  className="text-green-600 pl-4"
                />
              </Link>
            </div>
          </div>
          <ReusePackage
            packages={arrayActivityPackage}
            setCurrentPackage={setCurrentActivityPackage}
            currentPackage={currentActivityPackage}
            activities={
              currentActivity?.name === "All" ? "" : currentActivity.name
            }
          />
        </div>
      </div>
      <div className="w-10/12 mx-auto sm:w-9/12 md:w-8/12 mt-16">
        <div className="book relative">
          <img className="w-full" src={About} alt="About Image" />
          <div className="absolute flex flex-col top-0 w-full h-full justify-end pb-16 left-16 space-y-4">
            <h1 className="text-[28px] font-medium text-white">
              Get Out There !!!
            </h1>
            <p className="text-base text-white block">
              Book Your Custom Packages All According To Your Wish
            </p>
            <Link className="py-3 px-3 w-fit bg-green-500 text-lg block text-white rounded-lg">
              Plan your trip now Here
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
