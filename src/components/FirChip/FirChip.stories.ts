import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/vue3';

import FirChip from './FirChip.vue';
import type { FirChipProps } from './FirChip.types.ts';

const meta = {
    title: 'Components/FirChip',
    component: FirChip,
    tags: ['autodocs'],
    argTypes: {
        type: { type: 'string', description: 'Chip type', control: 'select', options: ['default', 'double'] },
        view: { type: 'string', description: 'Chip view type', control: 'select', options: ['filled', 'outlined'] },
        color: { type: 'string', description: 'Chip color', control: 'select', options: ['red', 'yellow', 'green', 'blue',  'gray', 'custom'] },
        title: { type: 'string', description: 'Left side title', control: 'text' },
        bgCustomColor: { type: 'string', description: 'Background chip custom color', control: 'text' },
        textCustomColor: { type: 'string', description: 'Text chip custom color', control: 'text' },
    },
    args: {
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
        title: 'Title',
        default: 'chip',
        color: 'blue'
    },
};