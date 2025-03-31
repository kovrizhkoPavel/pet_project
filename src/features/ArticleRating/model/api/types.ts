export type TRating = {
  rating: number;
  feedback?: string;
};

export type TArticleRatingDto = {
  userId: string;
  articleId: string;
};

export type TRateArticleRatingDto = {
  userId: string;
  articleId: string;
} & TRating;
