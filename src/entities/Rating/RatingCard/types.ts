export type TRating = {
  rating: number;
  feedback?: string;
};

export type RatingFeedbackFormProps = {
  rating: number;
  feedback?: string;
  onRatingChange: (rating: number) => void;
  onTextareaChange?: (text: string) => void;
  onButtonSubmit: VoidFunction;
  onClose: VoidFunction;
};

export type RatingCardProps = {
  className?: string;
  title?: string;
  modalTitle?: string;
  defaultValue?: number;
  defaultFeedback?: string;
  closeModalHandler?: () => void;
  submitRatingHandler: (params: TRating) => void;
};

export type RatingState = {
  tempRating: number;
  isModalOpen: boolean;
  feedback: string;
};
