import { FC } from 'react';
import { getClassName } from 'shared/lib/classNames/getClassName';
import { Button } from 'shared/ui/Button/Button';
import { TSvgIcon } from 'shared/types/types';
import cls from './ButtonIcon.module.scss';

type TButtonIconProps = {
  onClick: VoidFunction;
  Icon: TSvgIcon;
  className?: string;
  iconClassName?: string;
  label?: string;
  dataTestId?:string;
}

export const ButtonIcon: FC<TButtonIconProps> = ({
  className, iconClassName, onClick, Icon, label, dataTestId,
}) => (
  <Button
    onClick={onClick}
    data-testid={dataTestId}
    className={getClassName(cls.button, {}, [className])}
  >
    <div className={cls.button_container}>
      <Icon className={getClassName(cls.button__icon, {}, [iconClassName])} />
      {label && <div className={cls.button__label}>{label}</div>}
    </div>
  </Button>
);
