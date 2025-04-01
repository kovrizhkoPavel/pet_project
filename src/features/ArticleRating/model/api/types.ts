import { TRating } from '@/entities/Rating';

export type TArticleRatingDto = {
  userId: string;
  articleId: string;
};

export type TRateArticleRatingDto = {
  userId: string;
  articleId: string;
} & TRating;
