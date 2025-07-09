import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MinusIcon, PlusIcon } from "lucide-react";
import React from "react";


export const FAQSection = (): JSX.Element => {
  // FAQ data for the left column
  const leftFAQs = [
    {
      question: "Why is Webflow the best nocode tool?",
      answer:
        "Webflow stands out as the leading no-code platform by giving users complete creative control over their websites without relying on developers.",
      defaultOpen: true,
    },
    {
      question: "When did Webflow was founded?",
      answer: "",
      defaultOpen: false,
    },
    {
      question: "Is NoCode the future of the web?",
      answer: "",
      defaultOpen: false,
    },
  ];

  // FAQ data for the right column
  const rightFAQs = [
    {
      question: "How to launch a Webflow website?",
      answer: "",
      defaultOpen: false,
    },
    {
      question: "Who founded BRIX Templates?",
      answer: "",
      defaultOpen: false,
    },
    {
      question: "Who are the Webflow founders?",
      answer: "",
      defaultOpen: false,
    },
  ];

  // Custom accordion trigger that uses our own styling and icons
  const CustomAccordionTrigger = ({
    children,
    isOpen,
  }: { children: React.ReactNode; isOpen?: boolean }) => (
    <div className="flex items-center justify-between w-full">
      <div className="inline-flex items-center gap-2">
        <div className="font-display-5-bold text-[#170f49] mt-[-1.00px]">
          {children}
        </div>
      </div>
      <div className="inline-flex items-center gap-2.5 p-[5px] bg-[#d0f500] rounded-lg">
        {isOpen ? (
          <MinusIcon className="w-[20.42px] h-[20.42px]" />
        ) : (
          <PlusIcon className="w-[20.42px] h-[20.42px]" />
        )}
      </div>
    </div>
  );

  return (
    <section className="flex flex-col items-center gap-[60px] w-full max-w-[1230px] mx-auto px-12">
      <h2 className="w-fit mt-[-1.00px]  font-['Plus_Jakarta_Sans',Helvetica] font-bold text-[#232f1a] text-4xl tracking-[-0.29px] leading-[50.4px]">
        Rideshare Help Center
      </h2>

      <div className="flex flex-col md:flex-row items-start gap-5 w-full">
        {/* Left Column */}
        <div className="flex flex-col items-start gap-5 flex-1 w-full">
          {leftFAQs.map((faq, index) => (
            <Accordion
              key={`left-faq-${index}`}
              type="single"
              collapsible
              defaultValue={faq.defaultOpen ? `item-${index}` : undefined}
              className="w-full"
            >
              <AccordionItem
                value={`item-${index}`}
                className={`w-full ${
                  faq.defaultOpen
                    ? "bg-white rounded-2xl pt-[30px] pb-11 px-9"
                    : "bg-white rounded-2xl border border-solid border-[#fafafd] h-[92.42px]"
                }`}
              >
                <div className="px-0 py-0">
                  <AccordionTrigger className="p-0 hover:no-underline">
                    <CustomAccordionTrigger isOpen={faq.defaultOpen}>
                      {faq.question}
                    </CustomAccordionTrigger>
                  </AccordionTrigger>
                  <AccordionContent className="pt-5 pb-0">
                    {faq.answer && (
                      <p className="font-['Plus_Jakarta_Sans',Helvetica] font-normal text-[#515251] text-sm leading-[22.4px]">
                        {faq.answer}
                      </p>
                    )}
                  </AccordionContent>
                </div>
              </AccordionItem>
            </Accordion>
          ))}
        </div>

        {/* Right Column */}
        <div className="flex flex-col items-start gap-5 flex-1 w-full">
          {rightFAQs.map((faq, index) => (
            <Accordion
              key={`right-faq-${index}`}
              type="single"
              collapsible
              className="w-full"
            >
              <AccordionItem
                value={`item-${index}`}
                className="bg-white rounded-2xl border border-solid border-[#fafafd] h-[92.42px]"
              >
                <div className="px-9 py-[30px]">
                  <AccordionTrigger className="p-0 hover:no-underline">
                    <CustomAccordionTrigger>
                      {faq.question}
                    </CustomAccordionTrigger>
                  </AccordionTrigger>
                  <AccordionContent>
                    {faq.answer && (
                      <p className="font-['Plus_Jakarta_Sans',Helvetica] font-normal text-[#515251] text-sm leading-[22.4px]">
                        {faq.answer}
                      </p>
                    )}
                  </AccordionContent>
                </div>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
};
