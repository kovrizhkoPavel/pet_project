import { useSelector } from 'react-redux';
import { RatingCard, TRating } from '@/entities/Rating';
import { getAuthData } from '@/entities/User';
import {
  useAddRatingMutation,
  useGetRatingByIdQuery,
} from '../model/api/articleRatingApi';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';

type TArticleRatingProps = {
  articleId: string;
  className?: string;
};

export const ArticleRating = (props: TArticleRatingProps) => {
  const { className, articleId } = props;
  const userData = useSelector(getAuthData);
  const [sendRating, { isLoading }] = useAddRatingMutation();
  const { data, isFetching } = useGetRatingByIdQuery(
    {
      articleId,
      userId: userData?.id || '',
    },
    { skip: !userData?.id },
  );

  const onSubmitRatingHandler = ({ rating, feedback }: TRating) => {
    sendRating({
      articleId,
      userId: userData?.id || '',
      rating,
      feedback,
    });
  };

  if (isFetching || isLoading) {
    return <Skeleton width="100%" height={200} />;
  }

  const dataRating = data?.[0];

  return (
    <RatingCard
      defaultValue={dataRating?.rating}
      defaultFeedback={dataRating?.feedback}
      className={className}
      submitRatingHandler={onSubmitRatingHandler}
    />
  );
};
