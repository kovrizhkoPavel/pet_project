import { useCallback, useReducer } from 'react';
import { RatingActionType, ratingReducer } from './ratingReducer';
import { RatingState } from './types';

type UseRatingCardProps = {
  defaultValue: number;
  closeModalHandler?: () => void;
};

export const useRatingCard = ({ defaultValue, closeModalHandler }: UseRatingCardProps) => {
  const [{ isModalOpen, feedback, tempRating }, dispatch] = useReducer(
    ratingReducer,
    {
      tempRating: defaultValue,
      isModalOpen: false,
      feedback: '',
    } as RatingState,
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