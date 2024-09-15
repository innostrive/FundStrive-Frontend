import React from "react";
import Container from "../Container/Container";

const OurPlan = () => {
  return (
    <section className="py-20 mb-20">
      <Container>
        <div className="grid grid-rows-1 grid-flow-col gap-4">
          <div className="h-auto w-auto p-10 bg-[#6295A2] rounded-md grid place-content-center place-items-center gap-2">
            <span className="text-2xl font-bold text-[#f3f4f7] uppercase">
              Our Mission
            </span>
            <p className="text-sm font-light text-[#f3f4f7] tracking-normal text-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repellat, ut reprehenderit explicabo dolorum praesentium
              consequuntur.
            </p>
          </div>
          <div className="h-auto w-auto p-10 bg-[#2B2A27] rounded-md grid place-content-center place-items-center gap-2">
            <span className="text-2xl font-bold text-[#f3f4f7] uppercase">
              Our Vision
            </span>
            <p className="text-sm font-light text-[#f3f4f7] tracking-normal text-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repellat, ut reprehenderit explicabo dolorum praesentium
              consequuntur.
            </p>
          </div>
          <div className="h-auto w-auto p-10 bg-[#f47721] rounded-md grid place-content-center place-items-center gap-2">
            <span className="text-2xl font-bold text-[#f3f4f7] uppercase">
              Our History
            </span>
            <p className="text-sm font-light text-[#f3f4f7] tracking-normal text-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repellat, ut reprehenderit explicabo dolorum praesentium
              consequuntur.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OurPlan;
