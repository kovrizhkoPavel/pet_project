import { useCallback, useState } from 'react';

type UseRatingCardProps = {
  initialRating: number;
  closeModalHandler?: () => void;
};

export const useRatingCard = ({
  initialRating,
  closeModalHandler,
}: UseRatingCardProps) => {
  const [isModalOpen, setIsModalpen] = useState(false);
  const [rating, setRatig] = useState(initialRating);

  const onModalClose = useCallback(() => {
    setIsModalpen(false);
    setRatig(initialRating);
    closeModalHandler?.();
  }, [closeModalHandler, initialRating]);

  const onRatingChange = useCallback((rating: number) => {
    setRatig(rating);
    setIsModalpen(true);
  }, []);

  return {
    isModalOpen,
    rating,
    onModalClose,
    onRatingChange,
  };
};
