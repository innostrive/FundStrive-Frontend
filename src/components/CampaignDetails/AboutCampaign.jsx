const AboutCampaign = () => {
  return (
    <div className="space-y-5">
      <h1 className="text-base font-medium leading-normal tracking-normal">
        Empowering Education for Underprivileged Children
      </h1>
      <div className="w-full rounded-full h-0.5 bg-[#2B2A27]">
        <div className="bg-[#f47721] h-0.5 rounded-full w-[45%]"></div>
      </div>
      <div className="grid grid-cols-2 place-content-between">
        <div className="text-center text-sm font-light">
          <p>Goal</p>
          <span className="font-medium text-[#219558]">$500000</span>
        </div>
        <div className="text-center text-sm font-light">
          <p>Raised</p>
          <span className="font-medium text-[#f47721]">$450000</span>
        </div>
      </div>
      <div>
        <h1 className="text-sm font-normal text-black">
          Organized By Bright Future Foundation
        </h1>
      </div>
    </div>
  );
};

export default AboutCampaign;
