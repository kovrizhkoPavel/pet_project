export type TRating = {
  rating: number;
  feedback?: string;
};

export type RatingFeedbackFormProps = {
  rating: number;
  feedback?: string;
  onButtonSubmit: (params: TRating) => void;
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
