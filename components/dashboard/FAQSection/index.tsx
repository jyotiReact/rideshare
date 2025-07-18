"use client";

import React, { JSX, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MinusIcon, PlusIcon } from "lucide-react";

export const FAQSection = (): JSX.Element => {
  const leftFAQs = [
    {
      question: "Why is Webflow the best nocode tool?",
      answer:
        "Webflow stands out as the leading no-code platform by giving users complete creative control over their websites without relying on developers.",
    },
    {
      question: "When was Webflow founded?",
      answer: "It was founded in 2013.",
    },
    {
      question: "Is NoCode the future of the web?",
      answer:
        "It's rapidly growing and empowering non-devs to build great products.",
    },
  ];

  const rightFAQs = [
    {
      question: "How to launch a Webflow website?",
      answer: "Click publish in the top-right corner.",
    },
    {
      question: "Who founded BRIX Templates?",
      answer: "A team of Webflow developers and designers.",
    },
    {
      question: "Who are the Webflow founders?",
      answer: "Vlad Magdalin, Sergie Magdalin, and Bryant Chou.",
    },
  ];

  const [openItemLeft, setOpenItemLeft] = useState<string | null>("item-0");
  const [openItemRight, setOpenItemRight] = useState<string | null>(null);

  const CustomAccordionTrigger = ({
    children,
    isOpen,
  }: {
    children: React.ReactNode;
    isOpen: boolean;
  }) => (
    <div className="flex items-center justify-between w-full">
      <div className="inline-flex items-center gap-2">
        <div className="font-bold text-[#170f49] text-base">{children}</div>
      </div>
      <div className="inline-flex items-center gap-2.5 p-[5px] bg-[#d0f500] rounded-lg  mr-[-30px] z-10 ">
        {isOpen ? (
          <MinusIcon className="w-[20.42px] h-[20.42px]" />
        ) : (
          <PlusIcon className="w-[20.42px] h-[20.42px]" />
        )}
      </div>
    </div>
  );

  return (
    <section className="flex flex-col items-center md:gap-[60px] gap-4 w-full max-w-[1230px] mx-auto md:px-12 px-5">
      <h2 className="md:text-4xl text-[24px] font-bold text-[#232f1a] leading-[50.4px]">
        Rideshare Help Center
      </h2>

      <div className="flex flex-col md:flex-row items-start gap-5 w-full">
        {/* Left Column */}
        <div className="flex flex-col items-center gap-5 flex-1 w-full ">
          <Accordion
            type="single"
            collapsible
            value={openItemLeft ?? undefined}
            onValueChange={(val) => setOpenItemLeft(val)}
            className="w-full"
          >
            {leftFAQs.map((faq, index) => {
              const value = `item-${index}`;
              return (
                <AccordionItem
                  key={value}
                  value={value}
                  className={`w-full transition-all duration-300  ${
                    openItemLeft === value
                      ? "bg-white rounded-2xl pt-[30px] pb-11 px-9"
                      : "bg-white rounded-2xl border border-solid border-[#fafafd] h-[92.42px]  pt-[30px]  pb-11 px-9"
                  }`}
                >
                  <div className="px-0 py-0 ">
                    <AccordionTrigger className="p-0 before:hidden after:hidden text-left">
                      <CustomAccordionTrigger isOpen={openItemLeft === value} >
                        {faq.question}
                      </CustomAccordionTrigger>
                    </AccordionTrigger>
                    <AccordionContent className="pt-5 pb-0 transition-all duration-300 ease-in-out overflow-hidden">
                      <p className="text-sm text-[#515251] leading-[22.4px]">
                        {faq.answer}
                      </p>
                    </AccordionContent>
                  </div>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>

        {/* Right Column */}
        <div className="flex flex-col items-start gap-5 flex-1 w-full">
          <Accordion
            type="single"
            collapsible
            value={openItemRight ?? undefined}
            onValueChange={(val) => setOpenItemRight(val)}
            className="w-full"
          >
            {rightFAQs.map((faq, index) => {
              const value = `item-${index}`;
              return (
                <AccordionItem
                  key={value}
                  value={value}
                  className={`w-full transition-all duration-300 ${
                    openItemRight === value
                      ? "bg-white rounded-2xl pt-[30px] pb-11 px-9"
                      : "bg-white rounded-2xl border border-solid border-[#fafafd] h-[92.42px] pt-[30px] pb-11 px-9"
                  }`}
                >
                  <div className="px-0 py-0">
                    <AccordionTrigger className="p-0 before:hidden after:hidden text-left">
                      <CustomAccordionTrigger isOpen={openItemRight === value}>
                        {faq.question}
                      </CustomAccordionTrigger>
                    </AccordionTrigger>
                    <AccordionContent className="pt-5 pb-0 transition-all duration-300 ease-in-out overflow-hidden">
                      <p className="text-sm text-[#515251] leading-[22.4px]">
                        {faq.answer}
                      </p>
                    </AccordionContent>
                  </div>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
