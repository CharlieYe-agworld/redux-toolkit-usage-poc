import { Blog } from "../__declarations__/blog";

export const dummyBlog = (index: number = 1): Blog => {
  return {
    id: index,
    title: `blog ${index}`
  }
};





