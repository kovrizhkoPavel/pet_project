import { FC } from 'react';
import { getClassName } from 'shared/lib/classNames/getClassName';
import { useTranslation } from 'react-i18next';
import cls from './NotFoundPage.module.scss';

type TNotFoundPageProps = {
  className?: string;
}

export const NotFoundPage: FC<TNotFoundPageProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={getClassName(cls.notFoundPage, {}, [className])}>
      {t('translation\:title_not_found')}
    </div>
  );
};
