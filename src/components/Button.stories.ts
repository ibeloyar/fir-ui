import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/vue3';

import Button from './Button.vue';

import { StyleDecorator } from '../../.storybook/decorators/style.decorator';

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
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Storybook',
    type: 'filled',
  },
};
