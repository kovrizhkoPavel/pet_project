import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/constants';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { ArticlesView } from 'entities/Article/constants';
import { StateScheme } from 'shared/types/stateScheme';
import ArticlesPage from './ArticlesPage';

const meta = {
  title: 'pages/Articles',
  component: ArticlesPage,
  decorators: [StoreDecorator({
    articles: {
      view: ArticlesView.TILE,
      isLoading: false,
      limit: 1,
      pageNum: 1,
      hasMore: false,
    },
  } as StateScheme)],
} satisfies Meta<typeof ArticlesPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
