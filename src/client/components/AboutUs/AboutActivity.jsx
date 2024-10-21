import happy from "../../assets/glitter.png";
const AboutActivity = ({ activity }) => {
  return (
    <div className="h-auto w-auto p-10 rounded-md border grid place-content-center place-items-center gap-2">
      <img src={activity?.image} alt="" className="h-12 w-12" />
      <span className="text-2xl font-bold text-[#2B2A27]">
        {activity?.name?.value}+
      </span>
      <p className="text-sm font-light text-[#2B2A27] tracking-normal">
        {activity?.name?.key}
      </p>
    </div>
  );
};

export default AboutActivity;
