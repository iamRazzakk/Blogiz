import BlogDetails from "@/components/ui/BlogDetails";
import { IBlogId } from "@/types"

const BlogDetailspage = async({params}:IBlogId) => {
    const res = await fetch(`http://localhost:5000/blogs/${params.blogId}`,
        {cache:"no-store"}
    );
      const blogs = await res.json();
      console.log(blogs)
    return (
    <div className="my-10">
        <BlogDetails blog={blogs} />
    </div>
  )
}

export default BlogDetailspage
