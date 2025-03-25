import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { getClassName } from '@/shared/lib/classNames/getClassName';
import LanguageIcon from '@/shared/assets/icon/language-icon.svg';
import { ButtonIcon } from '../ButtonIcon/ButtonIcon';
import cls from './LangSwitcher.module.scss';

type TLangSwitcherProps = {
  className?: string;
  hasLabel?: boolean;
};

export const LangSwitcher: FC<TLangSwitcherProps> = (props) => {
  const { className, hasLabel } = props;
  const { t, i18n } = useTranslation();

  const onButtonClick = async () => {
    await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <ButtonIcon
      className={getClassName(cls.langSwitcher, {}, [className])}
      onClick={onButtonClick}
      label={hasLabel ? t('translation\:toggleLang') : ''}
      Icon={LanguageIcon}
    />
  );
};
