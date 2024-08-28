import EyeIcon from 'shared/assets/icon/eye-icon.svg';
import cls from './ViewsCount.module.scss';

type TViewsCount = {
  count: number;
  className?: string;
}
export const ViewsCount = ({ count, className }: TViewsCount) => (
  <div className={className}>
    <EyeIcon className={cls.eyeIcon} />
    <span>{count}</span>
  </div>
);
