import { FC } from 'react';
import { getClassName } from 'shared/lib/classNames/getClassName';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginForm } from 'features/AuthByUserName/ui/LoginForm/LoginForm';
import cls from './LoginModal.module.scss';

type TLoginModalProps = {
  className?: string;
  isOpen: boolean;
  onClose: VoidFunction;
}

export const LoginModal: FC<TLoginModalProps> = (props) => {
  const { className, isOpen, onClose } = props;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className={getClassName(cls.loginModal, {}, [className])}
    >
      <LoginForm className={cls.loginForm} />
    </Modal>
  );
};
