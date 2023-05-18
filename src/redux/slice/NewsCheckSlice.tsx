import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {  LOGIN_API_PATH, REACT_APP_API_URL, REGISTER_API_PATH } from "../../constants/UserConstants"
import { API_KEY, TOP_STORIES_BASE_URL } from "../../constants/NewsConstant"
import { queryUrl } from '../../controllers/NewsController'



export const topstory = createApi({

    reducerPath: 'topstory',
    baseQuery: fetchBaseQuery({
        baseUrl: TOP_STORIES_BASE_URL,
    }),
    endpoints: (builder) => ({
        
        getPosts: builder.query<any,void>({
            query: () => ({
                url:queryUrl("arts"),
                method:'GET'
            }),
        }),
        getPostsByType: builder.query({
            query: (type) => ({
                url:queryUrl(type),
                method:'GET'
            }),
           // providesTags: ['Post'],
        }),
        
    }),
})

export const { useGetPostsByTypeQuery}=topstory