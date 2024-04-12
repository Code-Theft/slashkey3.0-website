/**
 * © IEEE CS Kerala Chapter 2024. All rights reserved.
 *
 * This code is the property of IEEE CS Kerala Chapter and is protected by copyright law.
 * Unauthorized use, reproduction, or distribution is strictly prohibited.
 *
 * @author Janajith D
 */

import React from "react";
import Image from "@components/Image";
import { imageAlts } from "@utils/constants";

const awards = [
  {
    id: 1,
    path: "/images/assets/csks/IKS_Large_Society_Award.png",
    alt: "IEEE Kerala Section's Outstanding Large Society Chapter Award 2023",
  },
  {
    id: 2,
    path: "/images/assets/csks/Early_CareerPEA.png",
    alt: "Early Career Professional Engagement in Outstanding Chapter Award Program",
  },
  {
    id: 3,
    path: "/images/assets/csks/Global_OCA.png",
    alt: "IEEE Computer Society (Global) Outstanding Chapter Award",
  },
];

export default function SlashkeyOneView() {
  return (
    <div className="overflow-hidden py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/*  About Slash Key */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 m-8 py-8">
          <div>
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              About
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-slk-light sm:text-4xl">
              Slash Key
            </p>

            <p className="mt-6 text-md text-justify leading-8 text-gray-800">
              Slash Key is a 30 hr Hackathon presented by IEEE CS Kerala
              Chapter, which aims to bring together aspiring developers, coders
              and tech enthusiasts from various backgrounds to collaborate and
              create cutting edge solutions. Two editions of the events were
              successfully completed in the previous years.
            </p>
          </div>
          <div className="overflow-hidden">
            <Image
              src="/images/assets/venue.jpg"
              alt={imageAlts.VENUE}
              className="hidden sm:block w-full h-auto rounded-xl shadow-xl"
              width={1216}
              height={516}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
