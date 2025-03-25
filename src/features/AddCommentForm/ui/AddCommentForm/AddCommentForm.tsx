import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Textarea } from '@/shared/ui/Textarea/Textarea';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { ButtonGroup } from '../ButtonGroup/ButtonGroup';
import { addCommentFormActions } from '../../model/slice/addCommentFormSlice';
import {
  getIsActive,
  getIsLoading,
  getText,
} from '../../model/selectors/getAddCommentForm';

type TAddCommentFormProps = {
  className?: string;
  onSubmit: VoidFunction;
};

export const AddCommentForm: FC<TAddCommentFormProps> = ({
  className,
  onSubmit,
}) => {
  const { t } = useTranslation();
  const text = useSelector(getText);
  const isActive = useSelector(getIsActive);
  const isLoading = useSelector(getIsLoading);
  const dispatch = useAppDispatch();

  const onTextareaChange = useCallback(
    (value: string) => {
      dispatch(addCommentFormActions.setText(value));
    },
    [dispatch],
  );

  const onFocus = useCallback(() => {
    dispatch(addCommentFormActions.setIsActive(true));
  }, [dispatch]);

  const onReset = useCallback(() => {
    dispatch(addCommentFormActions.reset());
  }, [dispatch]);

  if (isLoading) {
    return <Skeleton height={100} className={className} />;
  }

  return (
    <div className={className}>
      <Textarea
        label={t('translation\:comment_form_label')}
        value={text}
        direction="column"
        onChange={onTextareaChange}
        onFocus={onFocus}
      />
      <ButtonGroup isShow={isActive} onReset={onReset} onSubmit={onSubmit} />
    </div>
  );
};
