import { IBlogs } from "@/types";
import LatestBlogCard from "../ui/LatestBlogCard";
import BlogCard from "../ui/BlogCard";
const LatestBlog = ({ blogs }: { blogs: IBlogs[] }) => {
//   console.log(blogs);
  return (
    <div className="w-[90%] mx-auto">
      <h1 className="text-4xl text-center mt-5">
        Latest blog from <span className="text-accent">Blogiz</span>
      </h1>
      <p className="text-center text-gray-400 text-xl w-2/3 mx-auto">
        <i>
          Dive into the fascinating world of quantum computing, where unlocking
          unprecedented computational power.
        </i>
      </p>
      <div className="grid grid-cols-2 gap-4 my-5">
        {blogs.slice(0, 2).map((blog) => (
          <LatestBlogCard key={blog.id} blog={blog} />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4 my-5">
        {blogs.slice(3, 6).map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default LatestBlog;
