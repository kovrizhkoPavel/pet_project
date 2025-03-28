import { Suspense } from 'react';
import { Modal } from '@/shared/ui/Modal/Modal';
import { Loader } from '@/shared/ui/Loader/Loader';
import { RatingFeedbackForm } from './RatingFeedbackForm';
import { RatingFeedbackFormProps } from './types';
import cls from './RatingCard.module.scss';

type RatingModalProps = RatingFeedbackFormProps & {
  isOpen: boolean;
  title?: string;
};

export const RatingModal = (props: RatingModalProps) => {
  const { isOpen, title, ...feedbackFormProps } = props;

  return (
    <Modal
      isOpen={isOpen}
      onClose={feedbackFormProps.onClose}
      title={title}
      contentClass={cls.modalContent}
      lazy
    >
      <Suspense fallback={<Loader />}>
        <RatingFeedbackForm {...feedbackFormProps} />
      </Suspense>
    </Modal>
  );
};
