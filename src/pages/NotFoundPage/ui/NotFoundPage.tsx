import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { getClassName } from '@/shared/lib/classNames/getClassName';
import { PageContainer } from '@/widgets/PageContainer';
import cls from './NotFoundPage.module.scss';

type TNotFoundPageProps = {
  className?: string;
};

export const NotFoundPage: FC<TNotFoundPageProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <PageContainer className={getClassName(cls.notFoundPage, {}, [className])}>
      <h1>{t('translation\:title_not_found')}</h1>
    </PageContainer>
  );
};
