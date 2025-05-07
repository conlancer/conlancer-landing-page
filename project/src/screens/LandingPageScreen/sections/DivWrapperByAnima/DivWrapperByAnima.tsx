import { MinusIcon, PlusIcon } from "lucide-react";
import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";

export const DivWrapperByAnima = (): JSX.Element => {
  const [openItem, setOpenItem] = useState("item-3");

  const faqItems = [
    {
      question: "Do freelancers really get 100% of their earnings?",
      answer:
        "Yes, freelancers receive the full amount they earn without hidden platform fees.",
    },
    {
      question: "How does the instant payout system work?",
      answer:
        "Once your work is approved, funds are transferred immediately to your linked account.",
    },
    {
      question: "What is AI job matching, and how does it help me?",
      answer:
        "Our AI analyzes your skills and preferences to suggest the most relevant jobs automatically.",
    },
    {
      question: "What makes this platform ideal for Indian freelancers?",
      answer:
        "Our platform is built specifically for Indian freelancers, students, and creators—offering local support, multi-language access, and a system designed around the needs of India's freelance economy.",
    },
    {
      question: "How are submissions protected on the platform?",
      answer:
        "All submissions are securely stored and time-stamped. Clients can’t access your full work until payment is secured.",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row items-start justify-between max-w-[1440px] gap-12 px-4 md:px-8 py-12">
      {/* Left Section */}
      <div className="flex flex-col w-full md:w-[563px] items-center md:items-start gap-8">
        <div className="flex flex-col gap-2.5 w-full">
          <h2 className="font-bold text-[#222222] text-[36px] md:text-[44px] leading-tight">
            Frequently asked question
          </h2>
          <p className="font-medium text-primary-font text-xl leading-9">
            Built for Indian Freelancers
          </p>
        </div>

        <div className="relative w-full h-[300px] md:h-[362px] rounded-[20px] overflow-hidden bg-gradient-to-b from-zinc-800 to-black">
          <img className="" alt="Portal" src="/faq-image.png" />
        </div>
      </div>

      {/* Right Section - Accordion */}
      <div className="flex flex-col w-full md:w-[650px]">
        <Accordion
          type="single"
          collapsible
          className="w-full"
          value={openItem}
          onValueChange={(val) => setOpenItem(val)}
        >
          <div className="space-y-4">
            {faqItems.map((item, index) => {
              const itemId = `item-${index}`;
              const isOpen = openItem === itemId;
              return (
                <AccordionItem
                  key={itemId}
                  value={itemId}
                  className={`rounded-2xl border shadow-md transition-all duration-300 ${
                    isOpen
                      ? "bg-gradient-to-r from-gray-100 to-gray-200 border-gray-300"
                      : "bg-white border-gray-200"
                  }`}
                >
                  <AccordionTrigger className="flex items-center justify-between px-5 py-4 hover:no-underline [&>svg]:hidden">
                    <span
                      className={`text-left text-lg ${
                        isOpen
                          ? "font-bold text-black"
                          : "font-medium text-primary-color"
                      }`}
                    >
                      {item.question}
                    </span>
                    <span className="ml-auto">
                      {isOpen ? (
                        <MinusIcon className="h-5 w-5 text-black" />
                      ) : (
                        <PlusIcon className="h-5 w-5 text-primary-color" />
                      )}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-5 pb-5 pt-0 text-base text-black">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </div>
        </Accordion>
      </div>
    </div>
  );
};
