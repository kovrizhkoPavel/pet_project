import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { StateScheme, StoreProvider } from '@/app/providers/StoreProvider';
import i18nForTest from '../../../config/i18n/i18nForTest';

type TOptions = {
  route?: string;
  initialState?: StateScheme;
};

export const renderComponent = (
  component: ReactNode,
  options: TOptions = {},
) => {
  const { route = '/', initialState } = options;

  // for @headlessui selects
  window.ResizeObserver =
    window.ResizeObserver ||
    jest.fn().mockImplementation(() => ({
      disconnect: jest.fn(),
      observe: jest.fn(),
      unobserve: jest.fn(),
    }));

  return render(
    <MemoryRouter initialEntries={[route]}>
      <StoreProvider initialState={initialState}>
        <I18nextProvider i18n={i18nForTest}>{component}</I18nextProvider>
      </StoreProvider>
    </MemoryRouter>,
  );
};
