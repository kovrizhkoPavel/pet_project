import { FC } from 'react';
import { getClassName } from 'shared/lib/classNames/getClassName';
import { Loader } from 'shared/ui/Loader/Loader';
import cls from './ModalLoader.module.scss';

type TModalLoaderProps = {
  className?: string;
}

export const ModalLoader: FC<TModalLoaderProps> = ({ className }) => (
  <div className={getClassName(cls.modalLoader, {}, [className])}>
    <Loader />
  </div>
);
