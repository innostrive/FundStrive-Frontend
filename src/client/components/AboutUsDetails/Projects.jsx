import Container from "../Container/Container";
import happy from "../../assets/glitter.png";
import volunteer from "../../assets/shirt.png";
import donation from "../../assets/cash.png";
import award from "../../assets/medal.png";
const Projects = () => {
  return (
    <section className="py-20 bg-[#caccd1]">
      <Container>
        <div className="grid sm:grid-cols-4 grid-cols-1 gap-4 sm:px-0 px-5">
          <div className="h-auto w-auto p-10 bg-[#6295A2] rounded-md grid place-content-center place-items-center gap-2">
            <img src={happy} alt="" className="h-12 w-12" />
            <span className="text-2xl font-bold text-[#f3f4f7]">6528+</span>
            <p className="text-sm font-light text-[#f3f4f7] tracking-normal">
              Made Happy
            </p>
          </div>
          <div className="h-auto w-auto p-10 bg-[#2B2A27] rounded-md grid place-content-center place-items-center gap-2">
            <img src={award} alt="" className="h-12 w-12" />
            <span className="text-2xl font-bold text-[#f3f4f7]">6528+</span>
            <p className="text-sm font-light text-[#f3f4f7] tracking-normal">
              Award
            </p>
          </div>
          <div className="h-auto w-auto p-10 bg-[#f47721] rounded-md grid place-content-center place-items-center gap-2">
            <img src={volunteer} alt="" className="h-12 w-12" />
            <span className="text-2xl font-bold text-[#f3f4f7]">6528+</span>
            <p className="text-sm font-light text-[#f3f4f7] tracking-normal">
              Total Volunteer
            </p>
          </div>
          <div className="h-auto w-auto p-10 bg-[#7469B6] rounded-md grid place-content-center place-items-center gap-2">
            <img src={donation} alt="" className="h-12 w-12" />
            <span className="text-2xl font-bold text-[#f3f4f7]">6528+</span>
            <p className="text-sm font-light text-[#f3f4f7] tracking-normal">
              Dontaion Completed
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Projects;
