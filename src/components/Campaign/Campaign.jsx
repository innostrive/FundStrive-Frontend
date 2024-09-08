import { Link } from "react-router-dom";
import donate from "../../assets/donate-1.jpg";
import { Button, Title } from "../../styles/Styles";
import Container from "../Container/Container";
const Campaign = () => {
  const campaignData = [
    {
      id: 1,
      img: donate,
      organization: "Bright Future Foundation",
      title: "Empowering Education for Underprivileged Children",
      goal: "50000",
      raised: "12000",
    },
    {
      id: 2,
      img: donate,
      organization: "Health for All",
      title: "Medical Aid for Rural Communities",
      goal: "80000",
      raised: "32000",
    },
    {
      id: 3,
      img: donate,
      organization: "Save the Strays",
      title: "Building a New Animal Shelter",
      goal: "45000",
      raised: "15000",
    },
    {
      id: 4,
      img: donate,
      organization: "Pure Water Initiative",
      title: "Clean Water for Remote Villages",
      goal: "60000",
      raised: "22000",
    },
    {
      id: 5,
      img: donate,
      organization: "Global Relief Fund",
      title: "Emergency Relief for Flood Victims",
      goal: "100000",
      raised: "50000",
    },
    {
      id: 6,
      img: donate,
      organization: "Youth Empowerment",
      title: "Skill Development for Unemployed Youth",
      goal: "40000",
      raised: "10000",
    },
  ];

  return (
    <div className="bg-[#f3f4f7] py-20">
      <div>
        <Title title="Our Latest Campaign" />
        <div className="h-2 w-20 bg-[#2B2A27] rounded-full mx-auto mt-3"></div>
      </div>
      <Container>
        <div className="grid grid-cols-3 gap-10 mt-5">
          {campaignData.map((data, i) => (
            <div className="h-auto w-full max-w-96 rounded-md bg-white" key={i}>
              <img src={donate} alt="" className="h-52 w-full object-cover" />
              <div className="space-y-5 p-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img
                      src={donate}
                      alt=""
                      className="h-10 w-10 rounded-full"
                    />
                    <p className="text-sm font-normal">{data?.organization}</p>
                  </div>
                  <Link to={`/campaign/${data?.id}`}>
                    <div>
                      <Button label="Donate" />
                    </div>
                  </Link>
                </div>
                <div className="">
                  <h1 className="font-medium text-[#00112c] text-base">
                    {data?.title}
                  </h1>
                </div>

                <div className="w-full rounded-full h-0.5 bg-[#2B2A27]">
                  <div className="bg-[#f47721] h-0.5 rounded-full w-[45%]"></div>
                </div>

                <div className="flex justify-between">
                  <p className="font-bold text-sm text-[#00112c]">
                    ${data?.raised}
                    <span className="font-semibold text-sm ml-1 tracking-normal text-[#f47721]">
                      Raised
                    </span>
                  </p>
                  <p className="font-bold text-sm text-[#00112c]">
                    ${data.goal}
                    <span className="font-semibold text-sm ml-1 tracking-normal text-[#219558]">
                      Goal
                    </span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Campaign;
