import { fn } from '@storybook/test';

import Button from './Button.vue';

import { StyleDecorator } from '../../../.storybook/decorators/style.decorator.js';

const meta = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text', description: 'Button label', type: 'string' },
    type: { control: 'select', options: ['filled', 'outline', 'clear'], type: 'string' },
    size: { control: 'select', options: ['small', 'medium', 'large'], type: 'string' },
  },
  args: {
    onClick: fn(),
  },
  decorators: StyleDecorator,
}

export default meta;

export const Filled = {
  args: {
    label: 'Storybook',
    type: 'filled',
    size: 'medium',
  },
};
