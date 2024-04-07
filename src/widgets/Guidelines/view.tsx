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

const sponsors = [
  {
    id: 1,
    name: "SADA",
    path: "/images/assets/sponsors/sada-black.png",
    alt: "SADA, An Insight company",
    height: 30,
    width: 120,
  },
  {
    id: 2,
    name: "Gtech MuLearn",
    path: "/images/assets/sponsors/mulearn.png",
    alt: "MuLearn",
    height: 30,
    width: 110,
  },
  {
    id: 3,
    name: "IEEE Kerala Section",
    path: "/images/assets/sponsors/kerala-section-black.png",
    alt: "MuLearn",
    height: 30,
    width: 137,
  },
  {
    id: 4,
    name: "IEEE YP AG Kerala Section",
    path: "/images/assets/sponsors/yp-black.png",
    alt: "MuLearn",
    height: 60,
    width: 106,
  },
];

export default function GuidelinesView() {
  return (
    <>
      <section>
        <div className="max-w-screen-xl px-4 py-20 mx-auto lg:px-6 sm:py-16 lg:py-24">
          <div className="flex flex-wrap  py-8">
            <div
              className="w-full  bg-white border border-gray-200 rounded-lg shadow m-4"
            >
              <div className="flex flex-col items-center py-10">
                <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-black-100 justify-center">
                  Guidelines
                </h2>
                <div>
                  <ul className="max-w-5xl space-y-1 text-gray-700 list-disc list-inside dark:text-gray-400 mt-10 mb-20 mx-5">
                    <li className="list-disc marker:text-slk-light">
                    A team of 3 or 4 members can only participate in the hackathon.
                    </li>
                    <li className="list-disc marker:text-slk-light">
                    The team members are expected to bring laptops for their use.
                    </li>
                    <li className="list-disc marker:text-slk-light">
                    I hereby provide my consent to the organizers to use my contact details provided in the form to contact me for updates regarding this event.
                    </li>
                    <li className="list-disc marker:text-slk-light">
                    I hereby provide my consent to the organizers of the event to use the contact details provided in the form to contact me for updates regarding future events conducted by the IEEE Computer Society Kerala Chapter.
                    </li>
                    <li className="list-disc marker:text-slk-light">
                    You are not eligible for a refund once you have registered for the event regardless of your participation in the event.
                    </li>
                    <li className="list-disc marker:text-slk-light">
                    I hereby agree with the terms and conditions and assure my enthusiastic participation in this event.
                    </li>
                    <li className="list-disc marker:text-slk-light">
                    The decision of the organizing committee will be final and binding
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
