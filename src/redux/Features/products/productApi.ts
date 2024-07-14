import { ProductProps } from "../../../interfaces/Products.interface";
import { injectEndpoints } from "../../api/api";

export const {
   useGetProductsQuery,
  useGetProductByIdQuery,
 } = injectEndpoints({
  endpoints: ({ query }) => ({
    getProducts: query<[], void>({
      query: () => {
        return {
          url: "products",
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
  }),
});
