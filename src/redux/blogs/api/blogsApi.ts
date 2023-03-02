import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Blog } from "../__declarations__/blog";
import { pause } from "../../../utils/pause";

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
      transformResponse: async (response: Blog[]) => {
        // the purpose is to check the isLoading state in UI
        await pause(2000);

        return response
      },
    }),
  }),
});

export const { useFetchBlogsQuery } = blogsApi;