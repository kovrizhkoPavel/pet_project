import {FC} from 'react';
import {getClassName} from "shared/lib/classNames/getClassName";
import cls from './AppLink.module.scss';
import {Link, LinkProps} from "react-router-dom";

export enum AppLinkTheme {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
}

type TAppLinkProps = {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink: FC<TAppLinkProps & LinkProps> = (props) => {
  const {
    className,
    to,
    children,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps} = props;
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
