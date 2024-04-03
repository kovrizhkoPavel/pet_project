import { FC, useCallback } from 'react';
import { getClassName } from 'shared/lib/classNames/getClassName';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { getIsLoading } from 'features/AuthByUserName/model/selectors/getIsLoading/getIsLoading';
import { ModalLoader } from 'widgets/ModalLoader';
import { Text, TextVariant } from 'shared/ui/Text/Text';
import { getError } from '../../model/selectors/getError/getError';
import { loginByUserName } from '../../model/services/loginByUserName/loginByUserName';
import { authActions } from '../../model/slice/authSlice';
import { getUserName } from '../../model/selectors/getUserName/getUserName';
import { getPassword } from '../../model/selectors/getPassword/getPassword';
import cls from './LoginForm.module.scss';

type TLoginFormProps = {
  className?: string;
}

const LoginForm: FC<TLoginFormProps> = ({ className }) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const userName = useSelector(getUserName);
  const password = useSelector(getPassword);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  const onUserNameChange = useCallback((value: string) => {
    dispatch(authActions.setUserName(value));
  }, [dispatch]);

  const onPasswordChange = useCallback((value: string) => {
    dispatch(authActions.setPassword(value));
  }, [dispatch]);

  const onSubmit = () => {
    dispatch(loginByUserName({ userName, password }));
  };

  return (
    <div className={getClassName(cls.loginForm, {}, [className])}>
      {isLoading && <ModalLoader />}
      {error && <Text title={t('translation\:title_error')} variant={TextVariant.ERROR} />}
      <Input
        type="text"
        className={cls.input}
        label={t('translation\:form_auth_login')}
        onChange={onUserNameChange}
        value={userName}
        isError={Boolean(error)}
        isAutoFocus
      />
      <Input
        type="text"
        className={cls.input}
        label={t('translation\:form_auth_pass')}
        onChange={onPasswordChange}
        value={password}
        isError={Boolean(error)}
      />
      <Button
        className={cls.btn}
        variant={ButtonVariant.FILL}
        onClick={onSubmit}
      >
        {t('translation\:button_login')}
      </Button>
    </div>
  );
};

export default LoginForm;
