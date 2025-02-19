import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { getClassName } from '@/shared/lib/classNames/getClassName';
import { Button, ButtonVariant } from '@/shared/ui/Button/Button';
import cls from './ProfileButtonGroup.module.scss';

type TProfileButtonGroupProps = {
  className?: string;
  isReadonly: boolean;
  onSubmit: VoidFunction;
  onReset: VoidFunction;
  onEdit: VoidFunction;
}

export const ProfileButtonGroup: FC<TProfileButtonGroupProps> = memo((props) => {
  const {
    className, onReset, onSubmit, onEdit, isReadonly,
  } = props;
  const { t } = useTranslation();

  if (isReadonly) {
    return (
      <Button
        variant={ButtonVariant.FILL}
        onClick={onEdit}
        data-testid="edit-profile-form-edit-button"
      >
        {t('translation\:profile_edit_btn')}
      </Button>
    );
  }

  return (
    <div className={getClassName(cls.profileButtonGroup, {}, [className])}>
      <Button
        variant={ButtonVariant.OUTLINE}
        onClick={onReset}
        className={cls.buttonReset}
        data-testid="edit-profile-form-reset-button"
      >
        {t('translation\:profile_reset_btn')}
      </Button>
      <Button
        variant={ButtonVariant.FILL}
        onClick={onSubmit}
        data-testid="edit-profile-form-submit-button"
      >
        {t('translation\:profile_submit_btn')}
      </Button>
    </div>
  );
});
