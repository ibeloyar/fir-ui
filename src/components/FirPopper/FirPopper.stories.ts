// import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/vue3';

import FirPopper from './FirPopper.vue';
import type { FirPopperProps } from './FirPopper.types.ts';

const meta = {
    title: 'Components/FirPopper',
    component: FirPopper,
    tags: ['autodocs'],
    argTypes: {
        type: { type: 'string', description: 'Opening type', control: 'select', options: ['default', 'click'] },
        position: { 
            type: 'string', 
            description: 'Position popper with content', 
            control: 'select', 
            options: ['bottom', 'bottom-start', 'bottom-end', 'top', 'top-end', 'top-start', 'left', 'rigth', 'auto'] 
        }
    },
    args: {},
    parameters: {
        slots: {
            ancor: {
                description: 'Default slot',
                template: '{{ args.default }}',
            },
        }
    },
} satisfies Meta<FirPopperProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { 
    args: {
        type: 'default',
        ancor: 'Referense text',
        content: 'Content text'
    },
};

export const Click: Story = { 
    args: {
        type: 'click',
        ancor: 'Ref',
        content: 'Text content'
    },
};

export const TwoPopper: Story = { 
    args: {
        type: 'click',
        ancor: 'Ref',
        content: 'Text content'
    },
    render: () => ({
        components: { FirPopper },
        template: `
        <div style="display: flex; gap: 8px;">

        <FirPopper type="default">
            <template v-slot:ancor>
                Popper 1
            </template>
            <template v-slot:content>  
                Popper 1 content
            </template>
        </FirPopper>

        <FirPopper type="default">
            <template v-slot:ancor>  
                Popper 2
            </template>
            <template v-slot:content>  
                Popper 2 content
            </template>
        </FirPopper>

        </div>
        `
    }),
};