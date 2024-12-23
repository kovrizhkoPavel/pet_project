import { getClassName } from 'shared/lib/classNames/getClassName';
import { HStack } from 'shared/ui/Stack';
import { useProfileFormHeader } from '../../hooks/useProfileFormHeader';
import { ProfileButtonGroup } from '../ProfileButtonGroup/ProfileButtonGroup';
import cls from './ProfilePageHeader.module.scss';

type TProfilePageHeaderProps = {
  className?: string;
}

export const ProfileFormHeader = ({ className }: TProfilePageHeaderProps) => {
  const {
    onButtonSubmit, onButtonReset, onEditButtonClick, canEdit, isReadonly,
  } = useProfileFormHeader();

  return (
    <div className={getClassName(cls.profilePageHeader, {}, [className])}>
      {canEdit && (
        <ProfileButtonGroup
          isReadonly={isReadonly}
          onEdit={onEditButtonClick}
          onSubmit={onButtonSubmit}
          onReset={onButtonReset}
        />
      )}
    </div>
  );
};
