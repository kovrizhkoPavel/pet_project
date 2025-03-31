import { rtkApi } from '@/shared/api/rtkApi';
import { ArticleUrl } from '@/shared/constants/api';
import { TArticleRatingDto, TRateArticleRatingDto } from './types';
import { TRating } from '@/entities/Rating';

const articleRatingApi = rtkApi.injectEndpoints({
  endpoints: (builder) => ({
    getRatingById: builder.query<TRating[], TArticleRatingDto>({
      query: ({ userId, articleId }) => ({
        method: 'GET',
        url: ArticleUrl.RATING,
        params: { userId, articleId },
      }),
      providesTags: ['articleRating'],
    }),

    addRating: builder.mutation<void, TRateArticleRatingDto>({
      query: (arg) => ({
        method: 'POST',
        url: ArticleUrl.RATING,
        body: arg,
      }),
      invalidatesTags: ['articleRating'],
    }),
  }),
});

export const { useGetRatingByIdQuery, useAddRatingMutation } = articleRatingApi;
