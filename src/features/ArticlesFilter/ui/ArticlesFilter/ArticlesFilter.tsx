import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getClassName } from '@/shared/lib/classNames/getClassName';
import { Toggle } from '@/shared/ui/Toggle/Toggle';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { TFilterType } from '../../model/types/ArticlesFilterScheme';
import { FilterType } from '../../constants';
import { articlesFilterActions } from '../../model/slice/articlesFilterSlice';
import { getFilterTypes } from '../../model/selectors/getArticlesFilter';
import cls from './ArticlesFilter.module.scss';

type TArticlesFilterProps = {
  className?: string;
  onChange: VoidFunction;
}
export const ArticlesFilter: FC<TArticlesFilterProps> = (props) => {
  const { className, onChange } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const filterTypes = useSelector(getFilterTypes);

  const toggleListConfig = [
    {
      type: FilterType.IT,
      isActive: FilterType.IT === filterTypes,
      text: t('translation\:articles_filter_it'),
    },
    {
      type: FilterType.POLICY,
      isActive: FilterType.POLICY === filterTypes,
      text: t('translation\:articles_filter_policy'),
    },
    {
      type: FilterType.ECONOMICS,
      isActive: FilterType.ECONOMICS === filterTypes,
      text: t('translation\:articles_filter_economics'),
    },
    {
      type: FilterType.SCIENCE,
      isActive: FilterType.SCIENCE === filterTypes,
      text: t('translation\:articles_filter_science'),
    },
  ];

  const onToggleChange = (type: TFilterType) => () => {
    dispatch(articlesFilterActions.setFilterType(
      type === filterTypes ? undefined : type,
    ));
    onChange();
  };

  return (
    <div className={getClassName(cls.articlesFilter, {}, [className])}>
      {toggleListConfig.map(({ type, text, isActive }) => (
        <Toggle
          key={type}
          isActive={isActive}
          onChangeHandler={onToggleChange(type)}
        >
          {text}
        </Toggle>
      ))}
    </div>
  );
};
