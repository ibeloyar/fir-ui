// import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/vue3';

import FirSelect from './FirSelect.vue';
import type { FirSelectProps } from './FirSelect.types';

const meta = {
    title: 'Components/FirSelect',
    component: FirSelect,
    tags: ['autodocs'],
    argTypes: {},
    args: {
        // onClose: fn(),
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
        value: '',
        options: [],
    },
};

export const TwoSelect: Story = { 
    args: {
        options: []
    },
    render: () => ({
        components: { FirSelect },
        template: `
        <div style="display: flex; gap: 8px;">

        <FirSelect value="" options="[]"/>
        <FirSelect value="" options="[]"/>

        </div>
        `
    }),
};