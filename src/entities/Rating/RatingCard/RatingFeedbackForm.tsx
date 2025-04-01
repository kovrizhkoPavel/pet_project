import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Rating } from '@/shared/ui/Rating';
import { Textarea } from '@/shared/ui/Textarea/Textarea';
import { Button, ButtonVariant } from '@/shared/ui/Button/Button';
import { RatingFeedbackFormProps } from './types';
import cls from './RatingCard.module.scss';

export const RatingFeedbackForm = (props: RatingFeedbackFormProps) => {
  const { rating, feedback, onButtonSubmit, onClose } = props;
  const [tempRating, setTempRating] = useState(rating);
  const [tempFeedback, setTempFeedback] = useState(feedback);
  const { t } = useTranslation();

  const onTextareaChange = (value: string) => {
    setTempFeedback(value);
  };

  const onRatingChange = (value: number) => {
    setTempRating(value);
  };

  const onButtonSubmitHandler = () => {
    onButtonSubmit({
      rating: tempRating,
      feedback: tempFeedback?.trim(),
    });
  };

  return (
    <VStack gap="12" align="center">
      <Rating defaultValue={tempRating} onChange={onRatingChange} />
      <Textarea
        placeholder={t('translation:feedback_placeholder')}
        isAutoFocus
        value={tempFeedback}
        onChange={onTextareaChange}
      />
      <HStack justify="end" gap="8" className={cls.buttonContainer}>
        <Button variant={ButtonVariant.OUTLINE} onClick={onClose}>
          {t('translation:rating_reset_btn')}
        </Button>
        <Button variant={ButtonVariant.FILL} onClick={onButtonSubmitHandler}>
          {t('translation:rating_submit_btn')}
        </Button>
      </HStack>
    </VStack>
  );
};
