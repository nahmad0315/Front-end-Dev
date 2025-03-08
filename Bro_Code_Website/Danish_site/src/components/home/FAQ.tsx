import FAQTabs from "./FAQTabs";
import FAQList from "@/components/faq-list/FAQList";
import bgImage from "@/assets/masked.png";

const faqTypes = ["Basic", "Company", "Pricing", "Feature", "Compare"];

const FAQ = () => {
  return (
    <section
      className="relative bg-primary mt-16 px-6 md:px-12 py-16 md:py-24 text-center bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${bgImage.src})` }}
    >
      <div className="container mx-auto">
        {/* Section Title */}
        <h2 className="text-button text-[36px] md:text-[44px] font-bold font-heading text-white max-w-[800px] mx-auto">
          Frequently Asked Questions
        </h2>

        {/* Tabs - Moved to a Client Component */}
        <FAQTabs faqTypes={faqTypes} />

        {/* FAQ Content */}
        <div className="mt-8">
          <FAQList />
        </div>
      </div>
    </section>
  );
};

export default FAQ;
