// import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/vue3';

import FirTooltip from './FirTooltip.vue';
import type { FirTooltipProps } from './FirTooltip.types';

const meta = {
    title: 'Components/FirTooltip',
    component: FirTooltip,
    tags: ['autodocs'],
    argTypes: {
        popperPosition: { 
            type: 'string', 
            description: 'Position popper with content', 
            control: 'select', 
            options: ['bottom', 'bottom-start', 'bottom-end', 'top', 'top-end', 'top-start', 'left', 'rigth', 'auto'] 
        }
    },
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
        text: 'foo bar \n tooltip text \n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        default: 'Ref',
    },
};

export const TwoTooltip: Story = { 
    args: {
        text: 'foo bar tooltip text'
    },
    render: () => ({
        components: { FirTooltip },
        template: `
        <div style="display: flex; justify-content: space-between;">

        <FirTooltip text="foo bar \n tooltip text \n Lorem ipsum dolor sit amet, consectetur adipiscing elit">Ref</FirTooltip>
        <FirTooltip text="foo bar \n tooltip text \n Lorem ipsum dolor sit amet, consectetur adipiscing elit">Ref</FirTooltip>

        </div>
        `
    }),
};