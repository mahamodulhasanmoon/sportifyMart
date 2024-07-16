import { ProductProps } from "../../../interfaces/Products.interface";
import { injectEndpoints } from "../../api/api";

export const {
   useGetProductsQuery,
  useGetProductByIdQuery,
  useAddNewProductMutation
 } = injectEndpoints({
  endpoints: ({ query,mutation }) => ({
    getProducts: query<ProductProps[], any>({
      query: (query) => {
        return {
          url: "products",
          params:{
            limit:query?.limit,
            fields:query?.fields,
            searchTerm:query?.searchTerm
          }
        };
      },
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
    addNewProduct: mutation<object, any >({
      query: (data) => ({
        url: `products`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});
