import fetchMock from "jest-fetch-mock";
import { setupApiStore } from "../../../utils/testUtils";
import { blogsApi } from "./blogsApi";
import { dummyBlog } from "../__dummy__/blogs";

describe("fetch Blogs", () => {
  const blog_1 = dummyBlog(1);
  const blog_2 = dummyBlog(2);
  const blog_3 = dummyBlog(3);

  beforeEach((): void => {
    fetchMock.resetMocks();
  });

  it("sends correct request", () => {
    const storeRef = setupApiStore(blogsApi, { blogs: blogsApi.reducer });
    fetchMock.mockResponseOnce(JSON.stringify({}));

    return storeRef.store
        .dispatch<any>(
            blogsApi.endpoints.fetchBlogs.initiate(undefined)
        )
        .then(() => {
          expect(fetchMock).toBeCalledTimes(1);
          const { method, url } = fetchMock.mock.calls[0][0] as Request;

          expect(method).toBe("GET");
          expect(url).toBe('http://localhost:3002/blogs');
        });
  });

  it("handles success resp", () => {
    const blogs = [blog_1, blog_2, blog_3];

    const storeRef = setupApiStore(blogsApi, { blogs: blogsApi.reducer });
    fetchMock.mockResponseOnce(JSON.stringify(blogs));

    return storeRef.store
        .dispatch<any>(
            blogsApi.endpoints.fetchBlogs.initiate(undefined)
        )
        .then((action: any) => {
          const { status, data, isSuccess } = action;
          expect(status).toBe("fulfilled");
          expect(isSuccess).toBe(true);
          expect(data).toStrictEqual(blogs);
        });
  });

  it("handles failed resp", () => {
    const storeRef = setupApiStore(blogsApi, { blogs: blogsApi.reducer });
    fetchMock.mockReject(new Error("Internal Server Error"));

    return storeRef.store
        .dispatch<any>(
            blogsApi.endpoints.fetchBlogs.initiate(undefined)
        )
        .then((action: any) => {
          const {
            status,
            error: { error },
            isError,
          } = action;
          expect(status).toBe("rejected");
          expect(isError).toBe(true);
          expect(error).toBe("Error: Internal Server Error");
        });
  });
});