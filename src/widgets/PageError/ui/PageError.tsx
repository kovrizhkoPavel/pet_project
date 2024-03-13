import { FC } from 'react';
import { getClassName } from 'shared/lib/classNames/getClassName';
import { useTranslation } from 'react-i18next';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import cls from './PageError.module.scss';

type TPageErrorProps = {
  className?: string;
}

export const PageError: FC<TPageErrorProps> = ({ className }) => {
  const { t } = useTranslation();
  const onButtonClick = () => {
    window.location.reload();
  };

  return (
    <div className={getClassName(cls.pageError, {}, [className])}>
      <h2>{t('translation\:title_error')}</h2>
      <Button onClick={onButtonClick} variant={ButtonVariant.OUTLINE} className={cls.button}>
        {t('translation\:button_reload_page')}
      </Button>
    </div>
  );
};
