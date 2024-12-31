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
        size: 'medium',
    },
    render: () => ({
        components: { FirIconButton },
        template: `
        <FirIconButton>
            <svg width="20" height="20" viewBox="0 0 20 20">
                <path 
                    d="M10 14.2L5 17l1-5.6-4-4 5.5-.7 2.5-5 2.5 5 5.6.8-4 4 .9 5.5z" 
                    stroke="currentColor" 
                    fill="none" 
                    fill-rule="evenodd" 
                    stroke-linejoin="round">
                </path>
            </svg>
        </FirIconButton>
        `
    })
};

export const Actions: Story = {
    args: {
        size: 'medium',
        default: '@',
    },
};
