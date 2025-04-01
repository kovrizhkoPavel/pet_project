import { rtkApi } from '@/shared/api/rtkApi';
import { ArticleUrl } from '@/shared/constants/api';
import { TArticleRatingDto, TRateArticleRatingDto } from './types';
import { TRating } from '@/entities/Rating';

const tags = ['articleRating'];

const articleRatingApi = rtkApi
  .enhanceEndpoints({ addTagTypes: tags })
  .injectEndpoints({
    endpoints: (builder) => ({
      getRatingById: builder.query<TRating[], TArticleRatingDto>({
        query: ({ userId, articleId }) => ({
          method: 'GET',
          url: ArticleUrl.RATING,
          params: { userId, articleId },
        }),
        providesTags: tags,
      }),

      addRating: builder.mutation<void, TRateArticleRatingDto>({
        query: (arg) => ({
          method: 'POST',
          url: ArticleUrl.RATING,
          body: arg,
        }),
        invalidatesTags: tags,
      }),
    }),
  });

export const { useGetRatingByIdQuery, useAddRatingMutation } = articleRatingApi;
