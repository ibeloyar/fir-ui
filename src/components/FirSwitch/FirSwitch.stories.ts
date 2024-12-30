import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/vue3';

import FirSwitch from './FirSwitch.vue';
import type { FirSwitchProps } from './FirSwitch.types.ts';

const meta = {
    title: 'Components/FirSwitch',
    component: FirSwitch,
    tags: ['autodocs'],
    argTypes: {
        disabled: { control: 'boolean', description: 'Is disabled', type: 'boolean' },
    },
    parameters: {
        slots: {
            default: {
                description: 'Default slot',
                template: '{{ args.default }}',
            },
        }
    },
} satisfies Meta<FirSwitchProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        value: true,
        'onUpdate:value': fn(),
    },
};

