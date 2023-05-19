import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_KEY, SEARCH_NEWS_BASEURL } from "../../constants/NewsConstant";

export const newsSearch = createApi({
  reducerPath: "SearchedNews",
  baseQuery: fetchBaseQuery({
    baseUrl: SEARCH_NEWS_BASEURL,
  }),

  endpoints: (builder) => ({
    getSerchedNews: builder.query({
      query: (type) => ({
        url: `${type}&api-key=` + API_KEY,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetSerchedNewsQuery } = newsSearch;
