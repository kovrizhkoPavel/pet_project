import { Drawer } from '@/shared/ui/Drawer/Drawer';
import { RatingFeedbackForm } from './RatingFeedbackForm';
import { RatingFeedbackFormProps } from './types';

type RatingDrawerProps = RatingFeedbackFormProps & {
  isOpen: boolean;
};

export const RatingDrawer = (props: RatingDrawerProps) => {
  const { isOpen, ...feedbackFormProps } = props;

  return (
    <Drawer isOpen={isOpen} onClose={feedbackFormProps.onClose}>
      <RatingFeedbackForm {...feedbackFormProps} />
    </Drawer>
  );
};
