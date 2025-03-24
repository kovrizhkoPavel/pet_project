import { useTranslation } from 'react-i18next';
import cls from './RatingCard.module.scss';
import { Drawer } from '@/shared/ui/Drawer/Drawer';
import { Textarea } from '@/shared/ui/Textarea/Textarea';
import { HStack } from '@/shared/ui/Stack';
import { Button, ButtonVariant } from '@/shared/ui/Button/Button';
import { Rating } from '@/shared/ui/Rating';

type TRatingDrawer = {
  isOpen: boolean;
  rating: number;
  feedback?: string;
  onClose: VoidFunction;
  onButtonSubmit: VoidFunction;
  onRatingChange: (rating: number) => void;
  onTextareaChange?: (text: string) => void;
}

export const RatingDrawer = (props: TRatingDrawer) => {
  const {
    isOpen, feedback, rating, onRatingChange, onTextareaChange, onButtonSubmit, onClose,
  } = props;
  const { t } = useTranslation();

  return (
    <Drawer isOpen={isOpen} onClose={onClose}>
      <HStack gap="12" justify="center">
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
      </HStack>
    </Drawer>
  );
};
