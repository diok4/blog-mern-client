import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface IAuthor {
  _id: string;
  username: string;
}

export interface IPost {
  title: string;
  text: string;
  tags: string;
  author: IAuthor;
  createdAt: string | number;
  _id: string;
  key: number | string;
}

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://sendpost-server.onrender.com/api/posts",
    credentials: "include",
  }),
  tagTypes: ["Post"],
  endpoints: (build) => ({
    createPost: build.mutation<IPost, Partial<IPost>>({
      query: (body) => ({
        url: "/",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Post"],
    }),
    getPosts: build.query<{ posts: IPost[] }, void>({
      query: () => ({
        url: "/",
        method: "GET",
        transformResponse: (response: { posts: IPost[] }) => response.posts,
      }),
      providesTags: ["Post"],
    }),

    getPostById: build.query<{ post: IPost }, string>({
      query: (id) => `/${id}`,
      providesTags: ["Post"],
    }),
  }),
});

export const { useCreatePostMutation, useGetPostsQuery, useGetPostByIdQuery } =
  postApi;
