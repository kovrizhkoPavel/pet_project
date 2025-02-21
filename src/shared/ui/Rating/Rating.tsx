import { getClassName } from '@/shared/lib/classNames/getClassName';
import StarIcon from '@/shared/assets/icon/star-icon.svg';
import cls from './Rating.module.scss';
import { HStack } from '@/shared/ui/Stack';
import { Button, ButtonVariant } from '@/shared/ui/Button/Button';

type TRatingProps = {
  className?: string;
}

const STARS_COUNT = 5;
const STARS = new Array(STARS_COUNT)
  .fill(null)
  .map((_, i) => i + 1);

export const Rating = ({ className }: TRatingProps) => (
  <HStack
    className={getClassName(cls.rating, {}, [className])}
    gap="8"
  >
    {STARS.map((star) => (
      <Button key={star}>
        <StarIcon />
      </Button>
    ))}
  </HStack>
);
