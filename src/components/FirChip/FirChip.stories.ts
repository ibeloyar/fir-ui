import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/vue3';

import FirChip from './FirChip.vue';
import type { FirChipProps } from './FirChip.types.ts';

const meta = {
    title: 'Components/FirChip',
    component: FirChip,
    tags: ['autodocs'],
    argTypes: {
        view: { type: 'string', description: 'Chip view type', control: 'select', options: ['filled', 'outlined', 'double'] },
        color: { type: 'string', description: 'Chip color', control: 'select', options: ['red', 'yellow', 'green', 'blue',  'gray', 'custom'] },
        title: { type: 'string', description: 'Left side title', control: 'text' },
        bgCustomColor: { type: 'string', description: 'Background chip custom color', control: 'text' },
        textCustomColor: { type: 'string', description: 'Text chip custom color', control: 'text' },
    },
    parameters: {
        slots: {
            default: {
                description: 'Default slot',
                template: '{{ args.default }}',
            },
        },
    },
} satisfies Meta<FirChipProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { 
    args: {
        default: 'chip text',
        color: 'blue',
        onClick: fn(),
    },
};

export const Double: Story = { 
    args: {
        title: 'Double',
        view: 'double',
        default: 'chip',
        color: 'green'
    },
};

export const Custom: Story = { 
    args: {
        view: 'filled',
        default: 'chip',
        color: 'custom',
        bgCustomColor: '#ae23b9',
        textCustomColor: 'white'
    },
};