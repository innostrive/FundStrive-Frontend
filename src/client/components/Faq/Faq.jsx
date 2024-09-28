import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import Container from "../Container/Container";
import { Title } from "../../Styles/Styles";

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
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className="py-20 bg-[#f3f4f7]">
      <Container>
        <Title title="Frequently Asked Question" className="py-10" />
        <div className="space-y-4 px-5 sm:px-0">
          <Accordion
            open={open === 1}
            icon={<Icon id={1} open={open} />}
            className="border border-blue-gray-100 rounded-md px-2 bg-secondary"
          >
            <AccordionHeader
              onClick={() => handleOpen(1)}
              className="border-none text-white text-xl font-medium hover:text-white"
            >
              <h1> What is Material Tailwind?</h1>
            </AccordionHeader>
            <AccordionBody className="text-white text-sm font-normal">
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 2}
            icon={<Icon id={2} open={open} />}
            className="border border-blue-gray-100 rounded-md px-2 bg-secondary"
          >
            <AccordionHeader
              onClick={() => handleOpen(2)}
              className="border-none text-white text-xl font-medium hover:text-white"
            >
              How to use Material Tailwind?
            </AccordionHeader>
            <AccordionBody className="text-white text-sm font-normal">
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 3}
            icon={<Icon id={3} open={open} />}
            className="border border-blue-gray-100 rounded-md px-2 bg-secondary"
          >
            <AccordionHeader
              onClick={() => handleOpen(3)}
              className="border-none text-white text-xl font-medium hover:text-white"
            >
              What can I do with Material Tailwind?
            </AccordionHeader>
            <AccordionBody className="text-white text-sm font-normal">
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
            </AccordionBody>
          </Accordion>
        </div>
      </Container>
    </div>
  );
};

export default Faq;
