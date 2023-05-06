import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {prepareHeaders} from '../../../store/middlewares/prepareHeaders';
import {ApplicationProperties} from '../../../application.properties';

export const servicosApi = createApi({
  reducerPath: 'servicosApi',
  baseQuery: fetchBaseQuery({
    baseUrl: ApplicationProperties.baseUrl,
    prepareHeaders,
  }),
  endpoints: builder => ({
    getServicosAll: builder.query({
      query: () => '/servicos',
    }),
  }),
});

export const {useGetservicosAllQuery} = servicosApi;
