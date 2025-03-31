import { useSelector } from 'react-redux';
import { RatingCard } from '@/entities/Rating';
import { getAuthData } from '@/entities/User';
import { useGetRatingByIdQuery } from '../model/api/articleRatingApi';

type TArticleRatingProps = {
  articleId: string;
  className?: string;
};

export const ArticleRating = (props: TArticleRatingProps) => {
  const { className, articleId } = props;
  const userData = useSelector(getAuthData);

  const { data } = useGetRatingByIdQuery(
    {
      articleId,
      userId: userData?.id || '',
    },
    { skip: !userData?.id },
  );

  const dataRating = data?.[0];

  return (
    <RatingCard
      defaultValue={dataRating?.rating}
      defaultFeedback={dataRating?.feedback}
      className={className}
      submitRatingHandler={() => undefined}
    />
  );
};
