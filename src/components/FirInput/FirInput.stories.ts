import type { Meta, StoryObj } from '@storybook/vue3';

import FirInput from './FirInput.vue';
import type { FirInputProps } from './FirInput.types.ts';

const meta = {
    title: 'Components/FirInput',
    component: FirInput,
    tags: ['autodocs'],
    argTypes: {
        value: { control: 'text', description: 'Input value', type: 'string' },
        error: { control: 'text', description: 'Error text', type: 'string' },
        disabled: { control: 'boolean', description: 'Is disabled', type: 'boolean' },
    },
 	args: {
        type: 'text',
    },
} satisfies Meta<FirInputProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: 'Username',
        error: '',
        disabled: false,
        placeholder: 'Enter username'
    }
};