import { FC, SVGProps } from 'react';
import { getClassName } from 'shared/lib/classNames/getClassName';
import { Button } from 'shared/ui/Button/Button';
import cls from './ButtonIcon.module.scss';

type TButtonIconProps = {
  onClick: VoidFunction;
  Icon: FC<SVGProps<SVGSVGElement>>;
  hasLable: boolean;
  className?: string;
  iconClassName?: string;
  label?: string;
}

export const ButtonIcon: FC<TButtonIconProps> = ({
  className, iconClassName, onClick, Icon, hasLable, label,
}) => (
  <Button
    onClick={onClick}
    data-testid="sidebar_button"
    className={getClassName(cls.button, {}, [className])}
  >
    <div className={cls.button_container}>
      <Icon className={getClassName(cls.button__icon, {}, [iconClassName])} />
      {(!hasLable && label) && <div className={cls.button__label}>{label}</div>}
    </div>
  </Button>
);
