import type { Meta, StoryObj } from '@storybook/vue3';

import FirInputPassword from './FirInputPassword.vue';
import type { FirInputPasswordProps } from './FirInputPassword.types';

const meta = {
    title: 'Components/FirInputPassword',
    component: FirInputPassword,
    tags: ['autodocs'],
    argTypes: {
        value: { control: 'text', description: 'Input value', type: 'string' },
        placeholder: { control: 'text', description: 'Placeholder value', type: 'string' },
        error: { control: 'text', description: 'Error text', type: 'string' },
        disabled: { control: 'boolean', description: 'Is disabled', type: 'boolean' },
    },
 	args: {

    },
} satisfies Meta<FirInputPasswordProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: 'Password',
        error: '',
        disabled: false,
        placeholder: 'Enter password',
    }
};