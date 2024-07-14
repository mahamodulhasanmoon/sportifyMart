import { BaseQueryFn, createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { apiUrl } from "../../config/constant";

// Define the base API
const baseQuery = fetchBaseQuery({
  baseUrl: `${apiUrl}`,
  // credentials: "include" as const,
})

const baseQueryWithRefreshToken:BaseQueryFn  = async(api,args,options)=>{
  const  result = await  baseQuery(api,args,options)
  return result
}

export const {
  reducerPath,
  reducer,
  injectEndpoints,
  middleware: authMiddleware,
  endpoints,
} = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithRefreshToken,
  endpoints: () => ({

  }),
});


