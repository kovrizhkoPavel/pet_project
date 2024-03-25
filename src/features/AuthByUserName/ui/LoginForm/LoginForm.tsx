import { FC } from 'react';
import { getClassName } from 'shared/lib/classNames/getClassName';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import cls from './LoginForm.module.scss';

type TLoginFormProps = {
  className?: string;
}

export const LoginForm: FC<TLoginFormProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={getClassName(cls.loginForm, {}, [className])}>
      <Input
        type="text"
        className={cls.input}
        label={t('translation\:form_auth_login')}
        isAutoFocus
      />
      <Input
        type="text"
        className={cls.input}
        label={t('translation\:form_auth_pass')}
      />
      <Button
        className={cls.btn}
        variant={ButtonVariant.FILL}
      >
        {t('translation\:button_sing_in')}
      </Button>
    </div>
  );
};
