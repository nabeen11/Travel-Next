import React from "react";
import { Link } from "react-router-dom";

export default function Destination() {
  return (
    <>
      <div className="Destination">
        <div className="w-11/12 mx-auto sm:w-10/12 md:w-9/12 flex bg-pink-500 h-24 items-center justify-between">
          <h1>Destination</h1>

          <Link to="1">Nepal</Link>
          <Link to="2">India</Link>
          <Link to="3">China</Link>
          <Link to="4">Germany</Link>
        </div>
      </div>
    </>
  );
}
