import { useState } from 'react';
import cls from './Rating.module.scss';
import { getClassName } from '@/shared/lib/classNames/getClassName';
import StarIcon from '@/shared/assets/icon/star-icon.svg';
import { HStack } from '@/shared/ui/Stack';
import { Button } from '@/shared/ui/Button/Button';

type TRatingProps = {
  className?: string;
  defaultValue?: number;
  onChange?: (value: number) => void;
};

const STARS_COUNT = 5;
const STARS = new Array(STARS_COUNT).fill(null).map((_, i) => i + 1);

export const Rating = (props: TRatingProps) => {
  const { className, onChange, defaultValue = 0 } = props;
  const [hoveredStar, setHoveredStar] = useState(0);

  const onButtonStarClick = (star: number) => () => {
    onChange?.(star);
  };

  const onMouseEnter = (star: number) => () => {
    setHoveredStar(star);
  };

  const onMouseLeave = () => {
    setHoveredStar(0);
  };

  const getIconClasses = (star: number) => {
    const mod = {
      [cls.iconSelected]:
        hoveredStar > 0 ? star <= hoveredStar : star <= defaultValue,
    };

    return getClassName(cls.icon, mod);
  };

  return (
    <HStack className={className} gap="8" onMouseLeave={onMouseLeave}>
      {STARS.map((star) => (
        <Button
          key={star}
          onClick={onButtonStarClick(star)}
          onMouseEnter={onMouseEnter(star)}
        >
          <StarIcon className={getIconClasses(star)} />
        </Button>
      ))}
    </HStack>
  );
};
