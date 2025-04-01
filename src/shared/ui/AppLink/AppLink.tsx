import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { getClassName } from '@/shared/lib/classNames/getClassName';
import { TObjectValue } from '@/shared/types/utils';
import cls from './AppLink.module.scss';

export const AppLinkTheme = {
  PRIMARY: 'primary',
  INVERTED: 'inverted',
} as const;

type TAppLinkProps = {
  className?: string;
  theme?: TObjectValue<typeof AppLinkTheme>;
};

export const AppLink: FC<TAppLinkProps & LinkProps> = (props) => {
  const {
    className,
    to,
    children,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
  } = props;
  return (
    <Link
      to={to}
      className={getClassName(cls.appLink, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </Link>
  );
};
