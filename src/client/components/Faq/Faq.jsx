import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import Container from "../Container/Container";
import { Title } from "../../Styles/Styles";
import useFaq from "../../hooks/useFaq";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

const Faq = () => {
  const [faq] = useFaq();
  const [open, setOpen] = useState(0);

  const handleOpen = (index) => {
    setOpen(open === index ? 0 : index);
  };
  return (
    <div className="py-20 bg-[#f3f4f7]">
      <Container>
        <div className="py-10">
          <Title title="FAQ" />
          <div className="h-2 w-20 bg-[#2B2A27] rounded-full mx-auto mt-3"></div>
        </div>
        <div className="space-y-4 px-5 sm:px-0">
          {faq.map((faqdata, index) => (
            <Accordion
              className="border border-blue-gray-100 rounded-md px-2 bg-text-primary"
              key={faqdata?._id}
              open={open === index}
            >
              <AccordionHeader
                className="border-none text-secondary text-xl font-medium hover:text-secondary"
                onClick={() => handleOpen(index)}
              >
                {faqdata?.key}
              </AccordionHeader>
              <AccordionBody className="text-secondary text-sm font-normal">
                {faqdata?.value}
              </AccordionBody>
            </Accordion>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Faq;
