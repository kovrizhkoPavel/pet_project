import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import i18nForTest from '../../../config/i18n/i18nForTest';

type TOptions = {
  route?: string;
};

export const renderComponent = (component: ReactNode, options: TOptions = {}) => {
  const { route = '/' } = options;

  return render(
    <MemoryRouter initialEntries={[route]}>
      <I18nextProvider i18n={i18nForTest}>
        {component}
      </I18nextProvider>
    </MemoryRouter>,

  );
};
