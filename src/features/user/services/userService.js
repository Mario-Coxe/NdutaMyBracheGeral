import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {prepareHeaders} from '../../../store/middlewares/prepareHeaders';
import {ApplicationProperties} from '../../../application.properties';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: ApplicationProperties.baseUrl,
    prepareHeaders,
  }),
  endpoints: builder => ({
    registro: builder.mutation({
      query: formData => ({
        url: '/register',
        method: 'POST',
        body: formData,
      }),
    }),
    updateUserInfo: builder.mutation({
      query: ({id, ...formData}) => ({
        url: `/user/updateUserInfo/${id}`,
        method: 'POST',
        body: formData,
      }),
    }),
    getUserData: builder.query({
      query: () => '/me',
    }),
  }),
});

export const {
  useRegistroMutation,
  useupdateUserInfoMutation,
  useGetUserDataQuery,
} = userApi;
