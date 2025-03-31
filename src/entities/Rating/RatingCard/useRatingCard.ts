import { useCallback, useReducer } from 'react';
import { RatingActionType, ratingReducer } from './ratingReducer';

type UseRatingCardProps = {
  defaultValue: number;
  defaultFeedback: string;
  closeModalHandler?: () => void;
};

export const useRatingCard = ({
  defaultValue,
  defaultFeedback,
  closeModalHandler,
}: UseRatingCardProps) => {
  const [{ isModalOpen, feedback, tempRating }, dispatch] = useReducer(
    ratingReducer,
    {
      tempRating: defaultValue,
      feedback: defaultFeedback,
      isModalOpen: false,
    },
  );

  const onModalClose = useCallback(() => {
    dispatch({
      type: RatingActionType.SET_IS_MODAL_OPEN,
      payload: false,
    });
    dispatch({
      type: RatingActionType.SET_TEMP_RATING,
      payload: defaultValue,
    });
    closeModalHandler?.();
  }, [closeModalHandler, defaultValue]);

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

  const onTextareaChange = useCallback((value: string) => {
    dispatch({
      type: RatingActionType.SET_FEEDBACK,
      payload: value,
    });
  }, []);

  return {
    isModalOpen,
    feedback,
    tempRating,
    onModalClose,
    onRatingChange,
    onTextareaChange,
  };
};
