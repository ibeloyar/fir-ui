// import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/vue3';

import FirTooltip from './FirTooltip.vue';
import type { FirTooltipProps } from './FirTooltip.types';

const meta = {
    title: 'Components/FirTooltip',
    component: FirTooltip,
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
} satisfies Meta<FirTooltipProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { 
    args: {
        text: 'foo bar tooltip text',
        default: 'Ref'
    },
};

export const TwoTooltip: Story = { 
    args: {
        text: 'foo bar tooltip text'
    },
    render: () => ({
        components: { FirTooltip },
        template: `
        <div style="display: flex; gap: 8px;">

        <FirTooltip text="foo bar tooltip text">Ref</FirTooltip>
        <FirTooltip text="foo bar tooltip text">Ref</FirTooltip>

        </div>
        `
    }),
};