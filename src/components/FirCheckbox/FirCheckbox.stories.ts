import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/vue3';

import FirCheckbox from './FirCheckbox.vue';
import type { FirCheckboxProps } from './FirCheckbox.types.ts';

const meta = {
    title: 'Components/FirCheckbox',
    component: FirCheckbox,
    tags: ['autodocs'],
    argTypes: {
        size: { control: 'select', description: 'Checkbox size', options: ['small', 'medium', 'large'], type: 'string' },
        label: { control: 'text', description: 'Checkbox label', type: 'string' },
        tooltip: { control: 'text', description: 'Checkbox tooltip', type: 'string' },
        error: { control: 'text', description: 'Checkbox error', type: 'string' },
        disabled: { control: 'boolean', description: 'Is disabled', type: 'boolean' },
    },
    args: {
        onChange: fn(),
    },
} satisfies Meta<FirCheckboxProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        size: 'medium',
        label: 'Fir checkbox'
    },
};

