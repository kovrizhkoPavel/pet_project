import { FC } from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage: FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      {t('translation\:title_about')}
    </div>
  );
};

export default AboutPage;
