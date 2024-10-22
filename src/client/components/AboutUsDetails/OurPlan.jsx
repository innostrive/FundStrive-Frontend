import React from "react";
import Container from "../Container/Container";
import useAboutVisionData from "../../hooks/useAboutVisionData";

const OurPlan = () => {
  const [vision] = useAboutVisionData();
  const color = ["#2B2A27", "#f47721", "#6295A2"];
  const combinedArray = vision.map((n, index) => ({
    name: n,
    color: color[index],
  }));
  return (
    <section className="py-20 mb-20">
      <Container>
        <div className="grid sm:grid-cols-3 grid-cols-1 gap-4 sm:px-0 px-5">
          {combinedArray.map((plan) => (
            <div
              className="h-auto w-auto p-10 rounded-md grid place-content-center place-items-center gap-2"
              style={{ backgroundColor: plan?.color }}
            >
              <span className="text-2xl font-bold text-[#f3f4f7] uppercase">
                {plan?.name?.key}
              </span>
              <p className="text-sm font-light text-[#f3f4f7] tracking-normal text-center">
                {plan?.name?.value}
              </p>
            </div>
          ))}
          {/* <div className="h-auto w-auto p-10 bg-[#2B2A27] rounded-md grid place-content-center place-items-center gap-2">
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
          </div> */}
        </div>
      </Container>
    </section>
  );
};

export default OurPlan;
