import 'app/styles/index.scss';
import { StoryFn } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider/constants';

export const ThemeDecorator = (theme: Theme) => (Story: StoryFn) => (
  <div className={`app ${theme}`}>
    <Story />
  </div>
);
