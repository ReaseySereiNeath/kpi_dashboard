import Link from "next/link";
import React from "react";
import CardForMap from "./CardForMap";
import CardShowData from "./CardShowData";
import NavbarTop from "./NavbarTop";

const Center = () => {
  return (
    <div className="flex flex-grow h-screen overflow-y-scroll scrollbar-hide">
      <NavbarTop />
      <section className="mt-24 ml-10">
        <p className="text-[20px] font-semibold">Multipurpose</p>
        <div className="flex space-x-1 mb-10">
          <Link href="/">
            <div className="text-gray-400 text-xs ">Home</div>
          </Link>
          <div className="text-gray-400 text-xs">-</div>
          <div className="text-gray-400 text-xs">Dashboards</div>
        </div>

        <div className="flex flex-row mr-5">
          <div className="flex flex-wrap gap-5">
            <CardShowData />
            <CardShowData />
            <CardShowData />
            <CardShowData />
            <CardShowData />
            <CardShowData />
          </div>
          <div className="">
            <CardForMap />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Center;
