import React from "react";
import { Title } from "../../Styles/Styles";
import Container from "../Container/Container";
import Blog from "./Blog";
import useBlogsData from "../../../dashboard/hooks/useBlogsData";
const Blogs = () => {
  const posts = useBlogsData();
  console.log("blog:", posts);
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
    <section id="blog" className="py-20">
      <Container>
        <div className="py-20">
          <Title title="Blogs" />
          <div className="h-2 w-20 bg-[#2B2A27] rounded-full mx-auto mt-3"></div>
        </div>
        <div className="grid sm:grid-cols-3 grid-cols-1 justify-center gap-10 mt-5 px-5 sm:px-0">
          {posts.map((post, i) => (
            <Blog post={post} key={i} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Blogs;
