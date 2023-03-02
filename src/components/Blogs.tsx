import BlankSpace from "../utils/BlankSpace";
import _ from 'underscore';
import { useFetchBlogsQuery } from "../redux/blogs/api/blogsApi";

const Blogs = () => {
  const { data, isLoading } = useFetchBlogsQuery();

  const renderBlogs = () => {
    return _.map(data || [], ({ title }, index) => {
      return <p key={index}>{title}</p>
    })
  }
  return (
      <>
        <span>Blogs</span>
        <BlankSpace rem={1}/>
        {
          isLoading
              ? <span>Loading....</span>
              : renderBlogs()
        }

      </>
  )
}

export default Blogs;