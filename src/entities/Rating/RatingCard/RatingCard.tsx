import { useCallback, useReducer } from 'react';
import { useTranslation } from 'react-i18next';
import { getClassName } from '@/shared/lib/classNames/getClassName';
import cls from './RatingCard.module.scss';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Rating } from '@/shared/ui/Rating';
import { Text } from '@/shared/ui/Text/Text';
import { RatingActionType, ratingReducer } from './ratingReducer';
import { RatingModal } from './RatingModal';
import { Textarea } from '@/shared/ui/Textarea/Textarea';
import { Button, ButtonVariant } from '@/shared/ui/Button/Button';
import { RatingDrawer } from '@/entities/Rating/RatingCard/RatingDrawer';

type TRatingCardProps = {
  className?: string;
  title?: string;
  modalTitle?: string;
  defaultValue?: number;
  closeModalHandler?: () => void;
  submitRatingHandler: (params: {rating: number; feedback?: string}) => void;
}

export const RatingCard = (props: TRatingCardProps) => {
  const {
    className,
    title,
    defaultValue = 0,
    modalTitle,
    closeModalHandler,
    submitRatingHandler,
  } = props;

  const { t } = useTranslation();

  const [{ isModalOpen, feedback, tempRating }, dispatch] = useReducer(ratingReducer, {
    tempRating: defaultValue,
    isModalOpen: false,
    feedback: '',
  });

  const onModalClose = () => {
    dispatch({
      type: RatingActionType.SET_IS_MODAL_OPEN,
      payload: false,
    });
    dispatch({
      type: RatingActionType.SET_TEMP_RATING,
      payload: defaultValue,
    });
    closeModalHandler?.();
  };

  const onRatingChange = useCallback((rating: number) => {
    dispatch({
      type: RatingActionType.SET_IS_MODAL_OPEN,
      payload: true,
    });
    dispatch({
      type: RatingActionType.SET_TEMP_RATING,
      payload: rating,
    });
  }, []);

  const onTextareaChange = (value: string) => {
    dispatch({
      type: RatingActionType.SET_FEEDBACK,
      payload: value,
    });
  };

  const onButtonSubmit = () => {
    submitRatingHandler({
      rating: tempRating,
      feedback,
    });
  };

  return (
    <div className={getClassName(cls.ratingCard, {}, [className])}>
      <VStack gap="12" justify="center" align="center">
        {title && <Text title={title} />}
        <HStack justify="center">
          <Rating defaultValue={tempRating} onChange={onRatingChange} />
        </HStack>
        {/* <RatingModal */}
        {/*  isOpen={isModalOpen} */}
        {/*  rating={tempRating} */}
        {/*  title={modalTitle} */}
        {/*  onClose={onModalClose} */}
        {/*  onButtonSubmit={onButtonSubmit} */}
        {/*  onRatingChange={onRatingChange} */}
        {/*  onTextareaChange={onTextareaChange} */}
        {/* /> */}
        <RatingDrawer
          feedback={feedback}
          isOpen={isModalOpen}
          rating={tempRating}
          onRatingChange={onRatingChange}
          onClose={onModalClose}
          onButtonSubmit={onButtonSubmit}
          onTextareaChange={onTextareaChange}
        />
      </VStack>
    </div>
  );
};
