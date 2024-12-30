import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/vue3';

import FirSelect from './FirSelect.vue';
import type { FirSelectProps } from './FirSelect.types';

const meta = {
    title: 'Components/FirSelect',
    component: FirSelect,
    tags: ['autodocs'],
    argTypes: {
        value: { control: 'text', description: 'Input value', type: 'string' },
        placeholder: { control: 'text', description: 'Placeholder value', type: 'string' },
        error: { control: 'text', description: 'Error text', type: 'string' },
        disabled: { control: 'boolean', description: 'Is disabled', type: 'boolean' },
    },
    args: {
        // onChange: fn(),
    },
    parameters: {
        slots: {
            ancor: {
                description: 'Default slot',
                template: '{{ args.default }}',
            },
        }
    },
} satisfies Meta<FirSelectProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { 
    args: {
        label: 'Select',
        placeholder: 'Select number',
        value: 'two',
        options: ['one', 'two', 'three'],
        'onUpdate:value': fn(),
    },
};

export const TwoSelect: Story = { 
    args: {
        options: ['1', '2', '3']
    },
    render: () => ({
        components: { FirSelect },
        template: `
        <div style="display: flex; gap: 8px;">

        <FirSelect value="" options="123" />
        <FirSelect value="" options="123" />

        </div>
        `
    }),
};