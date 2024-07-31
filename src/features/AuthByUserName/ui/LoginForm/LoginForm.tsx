import { FC, useCallback, useEffect } from 'react';
import { getClassName } from 'shared/lib/classNames/getClassName';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { ModalLoader } from 'widgets/ModalLoader';
import { Text, TextVariant } from 'shared/ui/Text/Text';
import { KeyboardKey } from 'shared/constants/common';
import { useDynamicModuleLoader } from 'shared/lib/hooks/useDynamicModuleLoader';
import { TReducers } from 'shared/types/stateScheme';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/constants';
import { getIsLoading } from '../../model/selectors/getIsLoading/getIsLoading';
import { getError } from '../../model/selectors/getError/getError';
import { loginByUserName } from '../../model/services/loginByUserName/loginByUserName';
import { authActions, authReducer } from '../../model/slice/authSlice';
import { getUserName } from '../../model/selectors/getUserName/getUserName';
import { getPassword } from '../../model/selectors/getPassword/getPassword';
import cls from './LoginForm.module.scss';

type TLoginFormProps = {
  className?: string;
  onSuccess?: VoidFunction;
}

const initialReducer: TReducers = {
  authForm: authReducer,
};

const LoginForm: FC<TLoginFormProps> = ({ className, onSuccess }) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
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

  const onSubmit = useCallback(async () => {
    const response = await dispatch(loginByUserName({ userName, password }));
    if (response.meta.requestStatus === 'fulfilled') {
      onSuccess?.();
    }
  }, [dispatch, userName, password, onSuccess]);

  const onKeyDown = useCallback((evt: KeyboardEvent) => {
    if (evt.key === KeyboardKey.ENTER) {
      onSubmit().then(() => navigate(RoutePath.profile));
    }
  }, [navigate, onSubmit]);

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [onKeyDown]);

  useDynamicModuleLoader(initialReducer);

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
        direction="column"
      />
      <Input
        type="text"
        className={cls.input}
        label={t('translation\:form_auth_pass')}
        onChange={onPasswordChange}
        value={password}
        isError={Boolean(error)}
        direction="column"
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
