import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/vue3';

import FirButton from './FirButton.vue';
import type { FirButtonProps } from './FirButton.types.ts';

const meta = {
  title: 'Example/FirButton',
  component: FirButton,
  tags: ['autodocs'],
  argTypes: {
    view: { control: 'select', options: ['filled', 'outline', 'clear'], type: 'string' },
    size: { control: 'select', options: ['small', 'medium', 'large'], type: 'string' },
  },
  args: {
    onClick: fn(),
  },
  parameters: {
    slots: {
      default: {
        description: 'Default slot',
        template: `{{ args.default }}`,
      },
    }
  },
} satisfies Meta<FirButtonProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Filled: Story = {
  args: {
    view: 'filled',
    size: 'medium',
    default: 'Fir Vue',
  },
};
