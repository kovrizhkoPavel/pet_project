import { FC, useCallback, useState } from 'react';
import { getClassName } from 'shared/lib/classNames/getClassName';
import { useTranslation } from 'react-i18next';
import { Textarea } from 'shared/ui/Textarea/Textarea';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import { useDynamicModuleLoader } from 'shared/lib/hooks/useDynamicModuleLoader';
import { TReducers } from 'shared/types/stateScheme';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { ButtonGroup } from 'features/AddCommentForm/ui/ButtonGroup/ButtonGroup';
import { addCommentFormActions, addCommentFormReducer } from '../../model/slice/addCommentFormSlice';
import cls from './AddCommentForm.module.scss';
import { getText } from '../../model/selectors/getAddCommentForm';

type TAddCommentFormProps = {
  className?: string;
}

const initialReducers: TReducers = {
  addCommentForm: addCommentFormReducer,
};

export const AddCommentForm: FC<TAddCommentFormProps> = ({ className }) => {
  const [isActive, setIsActive] = useState(false);
  const { t } = useTranslation();
  const text = useSelector(getText);
  const dispatch = useAppDispatch();

  useDynamicModuleLoader(initialReducers);

  const onTextareaChange = useCallback((value: string) => {
    dispatch(addCommentFormActions.setText(value));
  }, [dispatch]);

  const onFocus = useCallback(() => {
    setIsActive(true);
  }, []);

  const onReset = useCallback(() => {
    setIsActive(false);
    dispatch(addCommentFormActions.reset());
  }, [dispatch]);

  const onSubmit = () => {};

  return (
    <div className={getClassName(cls.addCommentForm, {}, [className])}>
      <Textarea
        label={t('translation\:comment_form_label')}
        value={text}
        direction="column"
        onChange={onTextareaChange}
        onFocus={onFocus}
      />
      <ButtonGroup
        isShow={isActive}
        onReset={onReset}
        onSubmit={onSubmit}
      />
    </div>
  );
};
