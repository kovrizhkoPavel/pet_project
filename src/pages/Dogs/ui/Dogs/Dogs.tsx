import { useTranslation } from 'react-i18next';
import { getClassName } from 'shared/lib/classNames/getClassName';
import cls from './Dogs.module.scss';

type TDogsProps = {
  className?: string;
}

export const Dogs = (props: TDogsProps) => {
  const { className } = props;
  const { t } = useTranslation();
  
  return (
    <div className={getClassName(cls.dogs, {}, [className])}>
    
    </div>
)};