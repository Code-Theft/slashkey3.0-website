/**
 * © IEEE CS Kerala Chapter 2024. All rights reserved.
 *
 * This code is the property of IEEE CS Kerala Chapter and is protected by copyright law.
 * Unauthorized use, reproduction, or distribution is strictly prohibited.
 *
 * @author Janajith D
 */

import React from "react";
import Link from "@components/Link";
import { constants } from "@utils/constants";

export default function Content() {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <h1
            className="hero glitch1 layerstext-4xl font-bold tracking-tight text-7xl"
            data-text="SLASH KEY 3.0"
          >
            <span>SLASH KEY 3.0</span>
          </h1>
          <p className="mt-6 text-sm leading-8 text-gray-300">
            A 30-hour hackathon that offers students from across Kerala the
            opportunity to solve real-world challenges of society and showcase
            their innovative solutions.
          </p>
          <div className="mt-10 flex flex-col items-center lg:flex-row lg:justify-center lg:gap-x-6">
            <Link
              href={constants.REGISTER_LINK}
              className="rounded-md border boder-indigo bg-black-300 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-colloquiumOrange  hover:text-black-300 transition duration-300 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Register Now
            </Link>
            <Link
              href="/about"
              className="mt-4 lg:mt-0 text-sm font-semibold leading-6 text-black hover:text-colloquiumOrange transition duration-300 ease-in-out"
            >
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
