import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { Modal } from '@/shared/ui/Modal/Modal';
import cls from './RatingCard.module.scss';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Rating } from '@/shared/ui/Rating';
import { Textarea } from '@/shared/ui/Textarea/Textarea';
import { Button, ButtonVariant } from '@/shared/ui/Button/Button';
import { Loader } from '@/shared/ui/Loader/Loader';

type TRatingModal = {
  isOpen: boolean;
  rating: number;
  title?: string;
  feedback?: string;
  onClose: VoidFunction;
  onButtonSubmit: VoidFunction;
  onRatingChange: (rating: number) => void;
  onTextareaChange?: (text: string) => void;
};

export const RatingModal = (props: TRatingModal) => {
  const { t } = useTranslation();
  const {
    isOpen,
    title,
    rating,
    feedback,
    onClose,
    onRatingChange,
    onTextareaChange,
    onButtonSubmit,
  } = props;
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      contentClass={cls.modalContent}
      lazy
    >
      <Suspense fallback={<Loader />}>
        <VStack gap="12" align="center">
          <Rating defaultValue={rating} onChange={onRatingChange} />
          <Textarea
            placeholder={t('translation\:feedback_placeholder')}
            isAutoFocus
            value={feedback}
            onChange={onTextareaChange}
          />
          <HStack justify="end" gap="8" className={cls.buttonContainer}>
            <Button
              variant={ButtonVariant.OUTLINE}
              onClick={onClose}
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
  );
};
