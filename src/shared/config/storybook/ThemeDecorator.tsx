import 'app/styles/index.scss';
import { StoryFn } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider/constants';
import { ThemeProvider } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => (Story: StoryFn) => (
  <ThemeProvider initialTheme={theme}>
    <div className="app">
      <Story />
    </div>
  </ThemeProvider>
);
