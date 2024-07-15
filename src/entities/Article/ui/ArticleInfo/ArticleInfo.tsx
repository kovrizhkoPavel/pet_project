import { useSelector } from 'react-redux';
import { Text } from 'shared/ui/Text/Text';
import EyeIcon from 'shared/assets/icon/eye-icon.svg';
import DateIcon from 'shared/assets/icon/clarity_date-icon.svg';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { getData, getIsLoading } from '../../model/selectors/getArticleDetails';
import { TArticle } from '../../model/types/article';
import cls from './ArticleInfo.module.scss';

export const ArticleInfo = () => {
  const isLoading = useSelector(getIsLoading);
  const data: TArticle | null = useSelector(getData);

  if (isLoading) {
    return (
      <>
        <Skeleton width={700} height={30} className={cls.skeleton} />
        <Skeleton width={400} height={30} className={cls.skeleton} />
      </>
    );
  }

  return (
    <>
      <Text title={data?.title} size="L" text={data?.subtitle} className={cls.text} />
      <div className={cls.container}>
        <div className={cls.iconWrapper}>
          <EyeIcon className={cls.icon} />
        </div>
        <div>{data?.views}</div>
      </div>
      <div className={cls.container}>
        <div className={cls.iconWrapper}>
          <DateIcon className={cls.icon} />
        </div>
        <div>{data?.createdAt}</div>
      </div>
    </>
  );
};
