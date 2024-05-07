import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Is EcoFolio available for free?",
    answer: "Yes, EcoFolio offers a free version with basic features for personal use.",
    value: "item-1",
  },
  {
    question: "What are the benefits of upgrading to EcoFolio Premium?",
    answer:
      "EcoFolio Premium unlocks advanced features such as enhanced analytics, priority support, and access to exclusive sustainability resources.",
    value: "item-2",
  },
  {
    question:
      "Can I try out the Premium features before committing to a subscription?",
    answer:
      "Yes, EcoFolio offers a free trial of its Premium plan, allowing users to experience the full range of features before making a decision.",
    value: "item-3",
  },
  {
    question: "What payment options are available for EcoFolio Premium?",
    answer: "EcoFolio Premium subscriptions can be paid for monthly or annually, with flexible payment options including credit card and PayPal.",
    value: "item-4",
  },
  {
    question:
      "Is there a student or educational discount available for EcoFolio Premium?",
    answer:
      "Yes, EcoFolio offers discounted pricing for students and educational institutions. Contact our support team to learn more about eligibility and special offers.",
    value: "item-5",
  },
];

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions
        </span>
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full AccordionRoot"
      >
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem
            key={value}
            value={value}
          >
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Still have questions?{" "}
        <a
          rel="noreferrer noopener"
          href="#"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Contact us
        </a>
      </h3>
    </section>
  );
};
