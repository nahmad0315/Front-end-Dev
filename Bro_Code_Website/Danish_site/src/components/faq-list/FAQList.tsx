import React from "react";
import Accordion from "../common/accordion/Accordion";

const faqs = [
  {
    question: "What Is Property Management Software?",
    answer:
      "Property management software helps landlords and property managers manage rental properties efficiently, handling tasks such as tenant screening, rent collection, and maintenance requests.",
  },
  {
    question: "How does it help property owners?",
    answer:
      "It streamlines operations, improves tenant communication, automates accounting, and provides analytics to optimize rental income.",
  },
];

const FAQList: React.FC = () => {
  return (
    <section className="pt-5">
      <div className="container mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <Accordion key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
};

export default FAQList;
