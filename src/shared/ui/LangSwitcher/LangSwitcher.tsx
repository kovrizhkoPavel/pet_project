import { FC } from 'react';
import { getClassName } from 'shared/lib/classNames/getClassName';
import { useTranslation } from 'react-i18next';
import { ButtonIcon } from 'shared/ui/ButtonIcon/ButtonIcon';
import LanguageIcon from 'shared/assets/icon/language-icon.svg';
import cls from './LangSwitcher.module.scss';

type TLangSwitcherProps = {
  className?: string;
  hasLabel?: boolean;
}

export const LangSwitcher: FC<TLangSwitcherProps> = (props) => {
  const { className, hasLabel = true } = props;
  const { t, i18n } = useTranslation();

  const onButtonClick = async () => {
    await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <ButtonIcon
      className={getClassName(cls.langSwitcher, {}, [className])}
      onClick={onButtonClick}
      label={t('translation\:toggleLang')}
      Icon={LanguageIcon}
      hasLable={hasLabel}
    />
  );
};
