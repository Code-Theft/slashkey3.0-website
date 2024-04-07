/**
 * © IEEE CS Kerala Chapter 2024. All rights reserved.
 *
 * This code is the property of IEEE CS Kerala Chapter and is protected by copyright law.
 * Unauthorized use, reproduction, or distribution is strictly prohibited.
 *
 * @author Janajith D
 */

"use client";
import React, {useState} from "react";
import Image from "@components/Image";
import IconChevronDown from "@icons/IconChevronDown";
const faqs = [
  {
    id: 1,
    question: "What is a hackathon?",
    answer: "A hackathon is an event where individuals or teams collaborate intensively to create innovative solutions, typically software or hardware projects, within a limited timeframe.",
  },
  {
    id: 2,
    question: "Who can participate in the hackathon?",
    answer: "Anyone passionate about technology, including developers, designers, entrepreneurs, and students, can participate in the hackathon. There are no specific prerequisites, and diversity in skills and backgrounds is encouraged.",
  },
  {
    id: 3,
    question: "How long does the hackathon last?",
    answer: "The hackathon typically lasts for 24 to 48 hours, allowing participants to brainstorm, develop, and present their projects within this timeframe.",
  },
  {
    id: 4,
    question: "What kind of projects can I work on during the hackathon?",
    answer: "Participants can work on a wide range of projects, including but not limited to soft"
  }
];

export default function FAQView() {
  const [tab, setTab] = useState(0);

  const handleClick = (idx:number) => {
    setTab(tab === idx ? 0 : idx);
  };

  const handleRotate = (idx:number) => {
    return tab === idx ? 'rotate-180' : '';
  };

  const handleToggle = (idx:number) => {
    return tab === idx ? '100%' : '0';
  };
  return (
    <>
      <section>
        <div className="max-w-screen-xl px-4 py-20 mx-auto lg:px-6 sm:py-16 lg:py-24">
          
        <div className="flex justify-center items-start my-2">
        <div className="w-full sm:w-10/13 md:w-3/5 my-1">
          <h2 className="text-4xl font-bold leading-tight tracking-tight text-black-100 text-center m-10">Frequently Asked Questions</h2>
          <ul className="flex flex-col">
          {faqs.map((faq) => (
            <li className="bg-white my-2 shadow-lg" key={faq.id}>
              <h2
                onClick={() => handleClick(faq.id)}
                className="flex flex-row justify-between items-center font-semibold p-3 cursor-pointer"
              >
                <span>{faq.question}</span>
                <IconChevronDown
                className={`h-5 w-5 flex-none text-slk-light transform transition-transform duration-500 ${handleRotate(faq.id)}`}
                aria-hidden="true"
              />
              </h2>
              <div
                className="border-l-2 border-slk-light overflow-hidden duration-500 transition-all"
                style={{ maxHeight: handleToggle(faq.id) }}
              >
                <p className="p-3 text-gray-900">{faq.answer} </p>
              </div>
            </li>
                ))}
          </ul>
        </div>
      </div>

        </div>
      </section>
    </>
  );
}
