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
import Content from "./components/Content";

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
      <div className="bg-slk-black-200">
        <div className="relative w-full overflow-hidden">
          <div className="min-h-screen flex">
            <div className="container m-auto px-6 py-20 md:pb-0 md:pt-40 md:px-12 lg:py-0 lg:px-10">
              <Content />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
