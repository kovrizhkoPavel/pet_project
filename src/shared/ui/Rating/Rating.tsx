import { useState } from 'react';
import cls from './Rating.module.scss';
import { getClassName } from '@/shared/lib/classNames/getClassName';
import StarIcon from '@/shared/assets/icon/star-icon.svg';
import { HStack } from '@/shared/ui/Stack';
import { Button } from '@/shared/ui/Button/Button';

type TRatingProps = {
  className?: string;
}

const STARS_COUNT = 5;
const STARS = new Array(STARS_COUNT)
  .fill(null)
  .map((_, i) => i + 1);

export const Rating = ({ className }: TRatingProps) => {
  const [selectedStar, setSelectedStar] = useState(0);

  const onButtonStarClick = (star: number) => () => {
    setSelectedStar(star);
  };

  return (
    <HStack
      className={getClassName(cls.rating, {}, [className])}
      gap="8"
    >
      {STARS.map((star) => (
        <Button
          key={star}
          onClick={onButtonStarClick(star)}
        >
          <StarIcon
            className={getClassName(cls.icon, { [cls.iconSelected]: star <= selectedStar })}
          />
        </Button>
      ))}
    </HStack>
  );
};
