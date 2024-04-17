import { FC, memo } from 'react';
import { getClassName } from 'shared/lib/classNames/getClassName';
import { useTranslation } from 'react-i18next';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import cls from './ProfileButtonGroup.module.scss';

type TProfileButtonGroupProps = {
  className?: string;
  onSubmit: VoidFunction;
  onReset: VoidFunction;
}

export const ProfileButtonGroup: FC<TProfileButtonGroupProps> = memo((props) => {
  const { className, onReset, onSubmit } = props;
  const { t } = useTranslation();

  return (
    <div className={getClassName(cls.profileButtonGroup, {}, [className])}>
      <Button
        variant={ButtonVariant.FILL}
        onClick={onReset}
        className={cls.buttonReset}
      >
        {t('translation\:profile_reset_btn')}
      </Button>
      <Button
        variant={ButtonVariant.FILL}
        onClick={onSubmit}
      >
        {t('translation\:profile_submit_btn')}
      </Button>
    </div>
  );
});
