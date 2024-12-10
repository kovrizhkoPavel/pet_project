const { makeFirstCharLowerCase } = require('../utils');

module.exports = (componentName) => `import {getClassName} from "shared/lib/classNames/getClassName";
import cls from './${componentName}.module.scss';
import { useTranslation } from 'react-i18next';

type T${componentName}Props = {
  className?: string;
}

export const ${componentName} = (props: T${componentName}Props) => {
  const { className } = props;
  const { t } = useTranslation();
  
  return (
    <div className={classNames(cls.${makeFirstCharLowerCase(componentName)}, {}, [className])}>
    
    </div>
  )};`;
