import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/vue3';

import FirIconButton from './FirIconButton.vue';
import type { FirIconButtonProps } from './FirIconButton.types.ts';

const meta = {
    title: 'Components/FirIconButton',
    component: FirIconButton,
    tags: ['autodocs'],
    argTypes: {
        size: { control: 'select', description: 'Button size', options: ['small', 'medium', 'large'], type: 'string' },
        disabled: { control: 'boolean', description: 'Is disabled', type: 'boolean' },
    },
    args: {
        onClick: fn(),
    },
    parameters: {
        slots: {
            default: {
                description: 'Default slot',
                template: '{{ args.default }}',
            },
        }
    },
} satisfies Meta<FirIconButtonProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        disabled: false,
        size: 'medium',
    },
};
