import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

/*
 * We're not using this at the moment, as we need to open a JS Filereader and read the files,
 * which is slow for very large files. Leaving this here for perhaps another day.
 */

export const dansVerificationApi = createApi({
  reducerPath: 'fileVerification',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://utility.type.verification.dataverse.tk/' }),
  endpoints: (build) => ({
    verifyFile: build.mutation({
      query: (content) => ({
        url: `type/${content.type}`,
        method: 'POST',
        // body: content.data,
        headers: {
          Authorization: 'Bearer D@NS-ei-2023'
        }
      }),
    }),
  }),
});

export const {
  useVerifyFileMutation,
} = dansVerificationApi;