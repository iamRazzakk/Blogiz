import BlogCard from "@/components/ui/BlogCard";
import { IBlogId, IBlogs } from "@/types";
export const generateStaticParams =async ()=>{
    const res = await fetch ("http://localhost:5000/blogs")
    const blogs = await res.json()
    return blogs.slice(0,3 ).map((blog:IBlogs) =>({
      blogId:blog?.id,
    }) )
    }
    
const BlogPage = async ({params}:IBlogId) => {
  const res = await fetch("http://localhost:5000/blogs",{
    cache:"no-store"
  });
  const blogs = await res.json();
  return (
    <div className="w-[90%] mx-auto ">
      <h1 className="text-4xl text-center mt-5">
        All blog from <span className="text-accent">Blogiz</span>
      </h1>
      <p className="text-center text-gray-400 text-xl w-2/3 mx-auto">
        <i>
          Dive into the fascinating world of quantum computing, where unlocking
          unprecedented computational <span className="text-accent">power</span>.
        </i>
      </p>
      <div className="grid grid-cols-3 gap-4 my-5">
        {blogs.map((blog: IBlogs) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
