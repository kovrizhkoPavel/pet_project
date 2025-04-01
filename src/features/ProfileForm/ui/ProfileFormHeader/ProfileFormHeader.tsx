import { getClassName } from '@/shared/lib/classNames/getClassName';
import { useProfileFormHeader } from '../../hooks/useProfileFormHeader';
import { ProfileButtonGroup } from '../ProfileButtonGroup/ProfileButtonGroup';
import cls from './ProfilePageHeader.module.scss';

type TProfilePageHeaderProps = {
  className?: string;
  onSubmit: () => void;
};

export const ProfileFormHeader = ({
  className,
  onSubmit,
}: TProfilePageHeaderProps) => {
  const { onButtonReset, onEditButtonClick, canEdit, isReadonly } =
    useProfileFormHeader();

  return (
    <div className={getClassName(cls.profilePageHeader, {}, [className])}>
      {canEdit && (
        <ProfileButtonGroup
          isReadonly={isReadonly}
          onEdit={onEditButtonClick}
          onSubmit={onSubmit}
          onReset={onButtonReset}
        />
      )}
    </div>
  );
};
