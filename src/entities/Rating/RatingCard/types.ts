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
  closeModalHandler?: () => void;
  submitRatingHandler: (params: { rating: number; feedback?: string }) => void;
};

export type RatingState = {
  tempRating: number;
  isModalOpen: boolean;
  feedback: string;
}; 