import { rtkApi } from '@/shared/api/rtkApi';
import { ArticleUrl } from '@/shared/constants/api';
import { TArticleRatingDto, TRateArticleRatingDto, TRating } from './types';

const articleRatingApi = rtkApi.injectEndpoints({
  endpoints: (builder) => ({
    getRatingById: builder.query<TRating, TArticleRatingDto>({
      query: (id) => ({
        method: 'GET',
        url: ArticleUrl.RATING,
        params: { id },
      }),
    }),

    addRating: builder.mutation<void, TRateArticleRatingDto>({
      query: (arg) => ({
        method: 'POST',
        url: ArticleUrl.RATING,
        body: arg,
      }),
    }),
  }),
});

export const { useGetRatingByIdQuery, useAddRatingMutation } = articleRatingApi;
