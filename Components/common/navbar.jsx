import React from "react";
import Logo from "/image/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="navbar bg-white">
      <div className="w-11/12 mx-auto sm:w-10/12 md:w-9/12 flex h-24 items-center justify-between px-14">
        <div className="logo">
          <Link href="/">
            <a>
              <Image src={Logo} alt="Travel Logo" />
            </a>
          </Link>
        </div>
        <div className="menu flex  items-center space-x-9">
          <ul className="flex space-x-9 text-base">
            <li>
              <Link href="/activities">
                <a>Activities</a>
              </Link>
            </li>
            <li>
              <Link href="/destinations">
                <a>Destinations</a>
              </Link>
            </li>
            <li>
              <Link href="/planning">
                <a>Planning</a>
              </Link>
            </li>
            <li>
              <Link href="/reviews">
                <a>Reviews</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
          <div className=" flex user border-success border rounded-xl space-x-1 px-1">
            <div className="bars px-1 py-1 m-[2px]">
              <FontAwesomeIcon icon={faBars} />
            </div>
            <div className="bars bg-success px-2 py-1 m-[2px]  rounded-md">
              <FontAwesomeIcon icon={faUser} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
