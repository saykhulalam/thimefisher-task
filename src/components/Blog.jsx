import React, { useState } from "react";
import blogOne from "../assets/blogOne.png";
import blogTow from "../assets/blogTow.png";
import blogThree from "../assets/blogThree.png";
import blogFour from "../assets/blogFour.png";
import blogFive from "../assets/blogFive.png";
import blogSix from "../assets/blogSix.png";
import BlogCard from "./BlogCard";

const Blog = () => {
  // Define all blog posts
  const blogPosts = [
    {
      imgurl: blogOne,
      date: "Photography | 28 Apr 2022",
      title: "The artist vocation is to send light into the human heart.",
      description:
        "Lorem Ipsum is simply dummy text the printing typesetting industry. Lorem Ipsum has been...",
      postid: "Posted By Daryl Smith",
    },
    {
      imgurl: blogTow,
      date: "Photography | 28 Apr 2022",
      title: "The mission of art is to represent nature not to imitate her.",
      description:
        "Lorem Ipsum is simply dummy text the printing typesetting industry. Lorem Ipsum has been...",
      postid: "Posted By Daryl Smith",
    },
    {
      imgurl: blogThree,
      date: "Photography | 28 Apr 2022",
      title: "There are countless versions of lorem ipsum, the most famous.",
      description:
        "Lorem Ipsum is simply dummy text the printing typesetting industry. Lorem Ipsum has been...",
      postid: "Posted By Daryl Smith",
    },
    {
      imgurl: blogFour,
      date: "Photography | 28 Apr 2022",
      title: "The principles of true art is not to portray, but to evoke.",
      description:
        "Lorem Ipsum is simply dummy text the printing typesetting industry. Lorem Ipsum has been...",
      postid: "Posted By Daryl Smith",
    },
    {
      imgurl: blogFive,
      date: "Photography | 28 Apr 2022",
      title: "UI Interactions of the week",
      description:
        "Lorem Ipsum is simply dummy text the printing typesetting industry. Lorem Ipsum has been...",
      postid: "Posted By Daryl Smith",
    },
    {
      imgurl: blogSix,
      date: "Photography | 28 Apr 2022",
      title: "Party Jokes Startling But Unnecessary",
      description:
        "Lorem Ipsum is simply dummy text the printing typesetting industry. Lorem Ipsum has been...",
      postid: "Posted By Daryl Smith",
    },
  ];

  const [visibleCount, setVisibleCount] = useState(4);

  const showMorePosts = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  return (
    <div className="max-w-[688px] w-full mx-auto xl:mx-0 px-4">
      <h2 className="text-[32px] md:text-[40px] lg:text-[48px] text-white font-semibold mt-[50px] md:mt-[80px] mb-[32px]">
        Blog
      </h2>

      <div className="grid grid-cols-1 xl:grid-cols-2 sm:grid-cols-2 gap-6">
        {blogPosts.slice(0, visibleCount).map((post, index) => (
          <BlogCard
            key={index}
            imgurl={post.imgurl}
            date={post.date}
            title={post.title}
            description={post.description}
            postid={post.postid}
          />
        ))}
      </div>

      {visibleCount < blogPosts.length && (
        <button
          onClick={showMorePosts}
          className="mt-6 px-4 py-2 bg-[#F89222] text-white rounded-full text-center mx-auto block hover:bg-transparent hover:border-[1px] hover:border-[#F89222] hover:text-[#F89222] duration-200"
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default Blog;
