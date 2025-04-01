import { useTranslation } from 'react-i18next';
import { getClassName } from '@/shared/lib/classNames/getClassName';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Rating } from '@/shared/ui/Rating';
import { Text } from '@/shared/ui/Text/Text';
import { RatingModal } from './RatingModal';
import { RatingDrawer } from './RatingDrawer';
import { useDevice } from '@/shared/lib/hooks/useDevice';
import { useRatingCard } from './useRatingCard';
import { RatingCardProps } from './types';
import cls from './RatingCard.module.scss';

export const RatingCard = (props: RatingCardProps) => {
  const {
    className,
    title,
    initialRating = 0,
    feedback = '',
    modalTitle,
    closeModalHandler,
    submitRatingHandler,
  } = props;
  const { t } = useTranslation();

  const isMobile = useDevice();
  const { isModalOpen, onModalClose, onRatingChange, rating } = useRatingCard({
    initialRating,
    closeModalHandler,
  });

  const sharedProps = {
    rating,
    feedback,
    onRatingChange,
    onButtonSubmit: submitRatingHandler,
    onClose: onModalClose,
  };

  return (
    <div className={getClassName(cls.ratingCard, {}, [className])}>
      <VStack gap="12" justify="center" align="center">
        {title && <Text title={title} />}
        <HStack justify="center">
          <Rating defaultValue={rating} onChange={onRatingChange} />
        </HStack>
        {!rating && (
          <Text title={t('translation:articles_rating_no_feedback')} />
        )}
      </VStack>
      {feedback && <Text text={feedback} />}
      {isMobile ? (
        <RatingDrawer isOpen={isModalOpen} {...sharedProps} />
      ) : (
        <RatingModal isOpen={isModalOpen} title={modalTitle} {...sharedProps} />
      )}
    </div>
  );
};
