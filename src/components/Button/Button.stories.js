import { fn } from '@storybook/test';

import Button from './Button.vue';

import { StyleDecorator } from '../../../.storybook/decorators/style.decorator.js';

const meta = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text', description: 'Button label', type: 'string' },
    type: { control: 'select', options: ['filled', 'outlined', 'clear'], type: 'string' }
  },
  args: {
    onClick: fn(),
  },
  decorators: StyleDecorator,
}

export default meta;

export const Primary = {
  args: {
    label: 'Storybook',
    type: 'filled',
  },
};
