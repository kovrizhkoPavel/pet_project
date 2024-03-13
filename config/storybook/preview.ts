import type {Preview} from "@storybook/react";
import {StyleDecorator} from "../../src/shared/config/storybook/StyleDecorator";
import {ThemeDecorator} from "../../src/shared/config/storybook/ThemeDecorator";
import {Theme} from "../../src/app/providers/ThemeProvider/constants";
import {TranslateDecorator} from "../../src/shared/config/storybook/TranslateDecorator";
import {RouterDecorator} from "../../src/shared/config/storybook/RouterDecorator";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    StyleDecorator,
    // TranslateDecorator,
    RouterDecorator,
    ThemeDecorator(Theme.LIGHT)
  ],
};

export const globalTypes = {
  locale: {
    name: 'Locale',
    description: 'Internationalization locale',
    toolbar: {
      icon: 'globe',
      items: [
        { value: 'en', title: 'English' },
        { value: 'ru', title: 'Русский' },
      ],
      showName: true,
    },
  },
};


export default preview;
