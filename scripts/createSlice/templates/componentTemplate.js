const { makeFirstCharLowerCase } = require('../utils');

module.exports = (
  componentName,
) => `import { useTranslation } from 'react-i18next';
import { getClassName } from 'shared/lib/classNames/getClassName';
import cls from './${componentName}.module.scss';

type T${componentName}Props = {
  className?: string;
}

export const ${componentName} = (props: T${componentName}Props) => {
  const { className } = props;
  const { t } = useTranslation();
  
  return (
    <div className={getClassName(cls.${makeFirstCharLowerCase(componentName)}, {}, [className])}>
    
    </div>
)};`;
