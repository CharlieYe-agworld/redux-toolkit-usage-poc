import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Blog } from "../__declarations__/blog";

export const blogsApi = createApi({
  reducerPath: 'blogs',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3002',
  }),
  endpoints: build => ({
    fetchBlogs: build.query<Blog[], void>({
      query: () => ({
        url: '/blogs',
        method: 'GET',
      }),
    }),
  }),
});

export const { useFetchBlogsQuery } = blogsApi;