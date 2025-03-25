type TRatingState = {
  tempRating: number;
  isModalOpen: boolean;
  feedback: string;
};

export enum RatingActionType {
  SET_TEMP_RATING = 'SET_TEMP_RATING',
  SET_IS_MODAL_OPEN = 'SET_IS_MODAL_OPEN',
  SET_FEEDBACK = 'SET_FEEDBACK',
}

type TAction =
  | { type: RatingActionType.SET_IS_MODAL_OPEN; payload: boolean }
  | { type: RatingActionType.SET_TEMP_RATING; payload: number }
  | { type: RatingActionType.SET_FEEDBACK; payload: string };

export const ratingReducer = (
  state: TRatingState,
  action: TAction,
): TRatingState => {
  switch (action.type) {
    case RatingActionType.SET_TEMP_RATING:
      return { ...state, tempRating: action.payload };
    case RatingActionType.SET_IS_MODAL_OPEN:
      return { ...state, isModalOpen: action.payload };
    case RatingActionType.SET_FEEDBACK:
      return { ...state, feedback: action.payload };
    default:
      return state;
  }
};
