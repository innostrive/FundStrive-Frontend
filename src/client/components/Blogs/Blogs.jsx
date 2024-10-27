import React from "react";
import { Title } from "../../Styles/Styles";
import Container from "../Container/Container";
import Blog from "./Blog";
import useBlogsData from "../../hooks/useBlogData";
import { useTranslation } from "react-i18next";
const Blogs = () => {
  const [blogs] = useBlogsData();
  const { t } = useTranslation();
  const title = t("componentTitle.blogsTitle");
  return (
    <section id="blog" className="py-20">
      <Container>
        <div className="py-20">
          <Title title={title} />
          <div className="h-2 w-20 bg-[#2B2A27] rounded-full mx-auto mt-3"></div>
        </div>
        <div className="grid sm:grid-cols-3 grid-cols-1 justify-center gap-10 mt-5 px-5 sm:px-0">
          {blogs.map((blog, i) => (
            <Blog blog={blog} key={i} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Blogs;
