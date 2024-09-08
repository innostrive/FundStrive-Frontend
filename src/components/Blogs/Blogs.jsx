import React from "react";
import donate from "../../assets/donate-1.jpg";
import { Button, Title } from "../../styles/Styles";
import Container from "../Container/Container";
import { Link } from "react-router-dom";
import Blog from "./Blog";
const Blogs = () => {
  const blogsData = [
    {
      id: 1,
      img: "https://example.com/crowdfunding1.jpg",
      title: "A Beginner's Guide to Crowdfunding",
      description:
        "Learn the basics of crowdfunding, including how to set up your campaign and attract backers.",
      publishedDate: "2024-07-01",
    },
    {
      id: 2,
      img: "https://example.com/crowdfunding2.jpg",
      title: "Top Crowdfunding Platforms for Startups",
      description:
        "Discover the best crowdfunding platforms to help you raise money for your business idea.",
      publishedDate: "2024-06-20",
    },
    {
      id: 3,
      img: "https://example.com/crowdfunding3.jpg",
      title: "How to Market Your Crowdfunding Campaign",
      description:
        "Effective marketing strategies to ensure your crowdfunding campaign reaches its funding goals.",
      publishedDate: "2024-05-15",
    },
    {
      id: 4,
      img: "https://example.com/crowdfunding4.jpg",
      title: "Success Stories: Crowdfunding Projects that Made It Big",
      description:
        "Inspiring success stories of entrepreneurs who turned their dreams into reality with crowdfunding.",
      publishedDate: "2024-08-10",
    },
    {
      id: 5,
      img: "https://example.com/crowdfunding5.jpg",
      title: "Common Crowdfunding Mistakes to Avoid",
      description:
        "Learn about common pitfalls and how to avoid them when launching your crowdfunding campaign.",
      publishedDate: "2024-07-25",
    },
    {
      id: 6,
      img: "https://example.com/crowdfunding6.jpg",
      title: "Crowdfunding for Nonprofits: A Complete Guide",
      description:
        "Find out how nonprofits can use crowdfunding to raise funds and increase awareness for their cause.",
      publishedDate: "2024-06-30",
    },
  ];

  return (
    <div className="py-20">
      <Container>
        <div className="py-20">
          <Title title="Blogs" />
          <div className="h-2 w-20 bg-[#2B2A27] rounded-full mx-auto mt-3"></div>
        </div>
        <div className="grid grid-cols-3 justify-center gap-10 mt-5">
          {blogsData.map((data, i) => (
            <Blog data={data} key={i} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Blogs;
