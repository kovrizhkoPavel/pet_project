import { FC } from 'react';
import { getClassName } from 'shared/lib/classNames/getClassName';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginForm } from 'features/AuthByUserName/ui/LoginForm/LoginForm';
import { useTranslation } from 'react-i18next';

type TLoginModalProps = {
  className?: string;
  isOpen: boolean;
  onClose: VoidFunction;
}

export const LoginModal: FC<TLoginModalProps> = (props) => {
  const { className, isOpen, onClose } = props;
  const { t } = useTranslation();

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className={getClassName('', {}, [className])}
      title={t('translation\:authorization_title')}
    >
      <LoginForm />
    </Modal>
  );
};
