import { FC, Suspense, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { getClassName } from '@/shared/lib/classNames/getClassName';
import { Modal } from '@/shared/ui/Modal/Modal';
import { ModalLoader } from '@/widgets/ModalLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { authActions } from '../../model/slice/authSlice';
import { LoginFormAsync as LoginForm } from '../LoginForm/LoginForm.async';
import cls from './LoginModal.module.scss';

type TLoginModalProps = {
  isOpen: boolean;
  onClose: VoidFunction;
  className?: string;
}

export const LoginModal: FC<TLoginModalProps> = (props) => {
  const { className, isOpen, onClose } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const onModalClose = useCallback(() => {
    onClose();
    dispatch(authActions.reset());
  }, [dispatch, onClose]);

  return (
    <Modal
      isOpen={isOpen}
      lazy
      onClose={onModalClose}
      className={getClassName('', {}, [className])}
      contentClass={cls.loginContent}
      title={t('translation\:authorization_title')}
    >
      <Suspense fallback={<ModalLoader />}>
        <LoginForm onSuccess={onModalClose} />
      </Suspense>
    </Modal>
  );
};
