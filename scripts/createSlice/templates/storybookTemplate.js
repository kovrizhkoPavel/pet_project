module.exports = (layer, componentName) => `import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/constants';
import { ${componentName} } from './${componentName}';

const meta = {
  title: '${layer}/${componentName}',
  component: ${componentName},
} satisfies Meta<typeof ${componentName}>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ${componentName}Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};`;
