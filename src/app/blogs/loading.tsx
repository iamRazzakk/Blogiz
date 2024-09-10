import LoadingCard from "@/components/ui/LoadingCard";
import { IBlogs } from "@/types";

const BlogLoading = async () => {
  const res = await fetch("http://localhost:5000/blogs");
  const blogs: IBlogs[] = await res.json();
  return (
    <div>
      <div className="grid lg:grid-cols-3 gap-4">
        {blogs.map((blog: IBlogs) => (
          <LoadingCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogLoading;
