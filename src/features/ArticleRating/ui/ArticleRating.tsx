import { RatingCard } from '@/entities/Rating';

type TArticleRatingProps = {
  className?: string;
};

export const ArticleRating = ({ className }: TArticleRatingProps) => (
  <RatingCard className={className} submitRatingHandler={() => undefined} />
);
