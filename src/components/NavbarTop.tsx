import { PlusIcon } from "@heroicons/react/outline";
import Link from "next/link";
import React from "react";

const NavbarTop = () => {
  return (
    <div className="bg-white p-6 w-full fixed top-0">
      <div className="container">
        <div className="flex items-center">
          <ul className="flex space-x-4">
            <li>
              <Link href="/">
                <div className="text-gray-500 hover:text-blue-500 ml-10">
                  Dashboard
                </div>
              </Link>
            </li>
            {/* Add more navigation links here */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavbarTop;
