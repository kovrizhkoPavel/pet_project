import { FC, Suspense } from 'react';
import { getClassName } from 'shared/lib/classNames/getClassName';
import { Modal } from 'shared/ui/Modal/Modal';
import { useTranslation } from 'react-i18next';
import { Loader } from 'shared/ui/Loader/Loader';
import { ModalLoader } from 'widgets/ModalLoader';
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

  return (
    <Modal
      isOpen={isOpen}
      lazy
      onClose={onClose}
      className={getClassName('', {}, [className])}
      contentClass={cls.loginContent}
      title={t('translation\:authorization_title')}
    >
      <Suspense fallback={<ModalLoader />}>
        <LoginForm />
      </Suspense>
    </Modal>
  );
};
