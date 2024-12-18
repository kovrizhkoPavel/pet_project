import { useTranslation } from 'react-i18next';
import { getClassName } from 'shared/lib/classNames/getClassName';
import cls from './EditProfileForm.module.scss';

type TEditProfileFormProps = {
  className?: string;
}

export const EditProfileForm = (props: TEditProfileFormProps) => {
  const { className } = props;
  const { t } = useTranslation();
  
  return (
    <div className={getClassName(cls.editProfileForm, {}, [className])}>
    
    </div>
)};