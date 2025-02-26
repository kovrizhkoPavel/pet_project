import { Suspense, useCallback, useReducer } from 'react';
import { useTranslation } from 'react-i18next';
import { getClassName } from '@/shared/lib/classNames/getClassName';
import cls from './RatingCard.module.scss';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Rating } from '@/shared/ui/Rating';
import { Text } from '@/shared/ui/Text/Text';
import { Modal } from '@/shared/ui/Modal/Modal';
import { Textarea } from '@/shared/ui/Textarea/Textarea';
import { ModalLoader } from '@/widgets/ModalLoader';
import { Button, ButtonVariant } from '@/shared/ui/Button/Button';
import { RatingActionType, ratingReducer } from './ratingReducer';

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

  const [{ isModalOpen, feedback, tempRating }, dispatch] = useReducer(ratingReducer, {
    tempRating: defaultValue,
    isModalOpen: false,
    feedback: '',
  });

  const { t } = useTranslation();

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
        <Modal
          isOpen={isModalOpen}
          onClose={onModalClose}
          title={modalTitle}
          contentClass={cls.modalContent}
          lazy
        >
          <Suspense fallback={<ModalLoader />}>
            <VStack gap="12" align="center">
              <Rating defaultValue={tempRating} onChange={onRatingChange} />
              <Textarea isAutoFocus value={feedback} onChange={onTextareaChange} />
              <HStack justify="end" gap="8" className={cls.buttonContainer}>
                <Button
                  variant={ButtonVariant.OUTLINE}
                  onClick={onModalClose}
                >
                  {t('translation\:rating_reset_btn')}
                </Button>
                <Button
                  variant={ButtonVariant.FILL}
                  onClick={onButtonSubmit}
                >
                  {t('translation\:rating_submit_btn')}
                </Button>
              </HStack>
            </VStack>
          </Suspense>
        </Modal>
      </VStack>
    </div>
  );
};
