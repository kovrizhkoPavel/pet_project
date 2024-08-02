import { FC } from 'react';
import { getClassName } from 'shared/lib/classNames/getClassName';
import { useTranslation } from 'react-i18next';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import cls from './ButtonGroup.module.scss';

type TButtonGroupProps = {
  className?: string;
  isShow: boolean;
  onSubmit: VoidFunction;
  onReset: VoidFunction;
}

export const ButtonGroup: FC<TButtonGroupProps> = (props) => {
  const {
    className, isShow, onReset, onSubmit,
  } = props;
  const { t } = useTranslation();

  if (!isShow) return <></>;

  return (
    <div className={getClassName(cls.buttonGroup, {}, [className])}>
      <Button
        variant={ButtonVariant.OUTLINE}
        onClick={onReset}
      >
        {t('translation\:comment_reset_btn')}
      </Button>
      <Button
        variant={ButtonVariant.FILL}
        className={cls.button}
        onClick={onSubmit}
      >
        {t('translation\:comment_submit_btn')}
      </Button>
    </div>
  );
};
