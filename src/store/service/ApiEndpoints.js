import { ApiService } from "./ApiService";

const ApiEndpoints = ApiService.injectEndpoints({
  endpoints: (builders) => ({
    getData: builders.query({
      query: () => "products",
    }),
  }),
});

export const { useGetDataQuery } = ApiEndpoints;
