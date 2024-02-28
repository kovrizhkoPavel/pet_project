import {FC} from 'react';
import {getClassName} from "shared/lib/classNames/getClassName";
import cls from './LangSwitcher.module.scss';
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {useTranslation} from "react-i18next";

type TLangSwitcherProps = {
  className?: string;
}

export const LangSwitcher: FC<TLangSwitcherProps> = ({className}) => {
  const {t, i18n} = useTranslation();

  const onButtonClick = async () => {
    await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  }

  return (
    <Button
      className={getClassName(cls.langSwitcher, {}, [className])}
      onClick={onButtonClick}
      theme={ButtonTheme.BORDER}
    >
      {t('translation\:toggleLang')}
    </Button>
  );
};
