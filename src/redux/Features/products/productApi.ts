/* eslint-disable @typescript-eslint/no-explicit-any */
import { ProductProps } from "../../../interfaces/Products.interface";
import { injectEndpoints } from "../../api/api";

export const {
   useGetProductsQuery,
  useGetProductByIdQuery,
  useAddNewProductMutation,
  useDeleteProductByIdMutation,
  useUpdateProductByIdMutation
 } = injectEndpoints({
  endpoints: ({ query,mutation }) => ({
    getProducts: query<ProductProps[], any>({
      query: (query) => {

        const queryParams:{
          limit:number,
          fields:string,
          category?:string,
          searchTerm?:string,
        } = {
          limit:query?.limit,
          fields:query?.fields,
          category:query?.category.trim(),
          searchTerm:query?.searchTerm.trim(),
        }
        return {
          url: "products",
          params:queryParams
        };
      },
      providesTags: ['Product'],
      transformResponse: (response: any) => {
        return response.data;
      },
      transformErrorResponse: (response: any) => {
        return response.data;
      },
    }),
    getProductById: query<ProductProps, any >({
      query: (id) => ({
        url: `products/${id}`,
      
      }),
      transformResponse: (response: any) => response.data,
      transformErrorResponse: (response: any) => response.data,
    }),
    deleteProductById: mutation<ProductProps, any >({
      query: (id) => ({
        url: `products/${id}`,
        method: "delete",
      }),
      invalidatesTags: ['Product'],
      transformResponse: (response: any) => response.data,
      transformErrorResponse: (response: any) => response.data,
      
    }),
    updateProductById: mutation<ProductProps, any >({
      query: ({id,formData}) => ({
        url: `products/${id}`,
        method: "PATCH",
        body:formData
      }),
      invalidatesTags: ['Product'],
      transformResponse: (response: any) => response.data,
      transformErrorResponse: (response: any) => response.data,
      
    }),
    addNewProduct: mutation<object, any >({
      query: (data) => ({
        url: `products`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ['Product'],
    }),
  }),
});
