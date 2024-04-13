/**
 * © IEEE CS Kerala Chapter 2024. All rights reserved.
 *
 * This code is the property of IEEE CS Kerala Chapter and is protected by copyright law.
 * Unauthorized use, reproduction, or distribution is strictly prohibited.
 *
 * @author Janajith D
 */

import React from "react";
import AssetsFooterWide from "@core/AssetsFooterWide";
import Content from "@widgets/LandingPage/components/Content";
import Image from "@components/Image";

const sponsors = [
  {
    id: 1,
    path: "/images/logos/cs/IEEE-CS_LogoTM-orange.png",
    alt: "Computer Society",
  },
  {
    id: 1,
    path: "/images/logos/cs/IEEE-CS_LogoTM-orange.png",
    alt: "Computer Society",
  },
  {
    id: 1,
    path: "/images/logos/cs/IEEE-CS_LogoTM-orange.png",
    alt: "Computer Society",
  },
];

export default function LandingPageview() {
  return (
    <>
      <div className="bg-white">
        <div className="relative w-full overflow-hidden">
          <div className="min-h-screen flex">
            <div className="container m-auto px-6 py-20 md:pb-0 md:pt-40 md:px-12 lg:py-0 lg:px-10">
              <div className="flex flex-wrap gap-12">
                <div className="lg:w-6/12 lg:pt-32 lg:pb-20">
                  <div className="space-y-8 mt-8 lg:-mr-24 xl:-mr-0">
                    <h1 className="text-4xl text-gray-800 font-bold md:text-5xl lg:leading-tight">
                      Call for Host
                    </h1>
                    <p className="text-lg text-gray-600">
                      The IEEE Computer Society Kerala Chapter is offering an
                      exciting opportunity to host a hackathon spanning 30
                      hours!
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <button
                        type="button"
                        title="Start buying"
                        className="w-full py-3 px-6 rounded-xl text-center transition bg-slk-light hover:bg-slk-regular  sm:w-max"
                      >
                        <span className="block text-white font-semibold">
                          Apply Now
                        </span>
                      </button>
                      {/* <button
                        type="button"
                        title="Start buying"
                        className="w-full py-3 px-6 rounded-xl text-center transition sm:w-max"
                      >
                        <div className="flex justify-center">
                          <span className="block font-semibold">
                            Learn More
                          </span>
                        </div>
                      </button> */}
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-gray-300 dark:border-gray-700">
                    <h6 className="text-lg text-green-800 dark:text-green-400 font-semibold">
                      Powered by
                    </h6>
                    <div className="mt-6 flex gap-10">
                      {sponsors?.map((item) => (
                        <div className="flex items-center" key={item?.id}>
                          <Image
                            className="-hue-rotate-30 w-auto h-auto"
                            src={item?.path}
                            width={100}
                            height={40}
                            alt={item?.alt}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="hidden bottom-0 md:-right-32 md:block md:w-full md:ml-auto lg:absolute lg:-right-32 lg:w-[60%] xl:-right-48 border-slk-light border-2">
                  {/* Task: Remove the Kuthira */}
                  <Image
                    src="/images"
                    className="ml-48 lg:ml-0"
                    alt="gril on an horse"
                    width="1053"
                    height="772"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
