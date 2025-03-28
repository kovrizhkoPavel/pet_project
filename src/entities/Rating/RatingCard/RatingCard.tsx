import { useCallback } from 'react';
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
    defaultValue = 0,
    modalTitle,
    closeModalHandler,
    submitRatingHandler,
  } = props;

  const isMobile = useDevice();
  const {
    isModalOpen,
    feedback,
    tempRating,
    onModalClose,
    onRatingChange,
    onTextareaChange,
  } = useRatingCard({
    defaultValue,
    closeModalHandler,
  });

  const onButtonSubmit = useCallback(() => {
    submitRatingHandler({
      rating: tempRating,
      feedback,
    });
  }, [submitRatingHandler, tempRating, feedback]);

  const sharedProps = {
    rating: tempRating,
    feedback,
    onRatingChange,
    onTextareaChange,
    onButtonSubmit,
    onClose: onModalClose,
  };

  return (
    <div className={getClassName(cls.ratingCard, {}, [className])}>
      <VStack gap="12" justify="center" align="center">
        {title && <Text title={title} />}
        <HStack justify="center">
          <Rating defaultValue={tempRating} onChange={onRatingChange} />
        </HStack>
        {isMobile ? (
          <RatingDrawer isOpen={isModalOpen} {...sharedProps} />
        ) : (
          <RatingModal
            isOpen={isModalOpen}
            title={modalTitle}
            {...sharedProps}
          />
        )}
      </VStack>
    </div>
  );
};
