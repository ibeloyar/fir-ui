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
        bgCustomColor: { type: 'string', description: 'Background chip custom color', control: 'color' },
        textCustomColor: { type: 'string', description: 'Text chip custom color', control: 'color' },
        titleCustomColor: { type: 'string', description: 'Title chip custom color', control: 'color' },
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
        color: 'blue',
        default: 'chip'
    },
    render: () => ({
        components: { FirChip },
        template: `
        <div style="display: flex; gap: 8px;">

        <FirChip 
            color="custom" 
            view="filled" 
            bgCustomColor="#ae23b9"
            textCustomColor="white"    
        >
                chip 1
        </FirChip>
        
        <FirChip 
            color="custom" 
            view="outlined" 
            bgCustomColor="#ae23b9"
            textCustomColor="#ae23b9"    
        >
                chip 2
        </FirChip>

        <FirChip 
            view="double"
            color="custom"
            title="title"
            bgCustomColor="#ae23b9"
            textCustomColor="var(--fir-global-text-color)"
            titleCustomColor="white"
        >
                chip 3
        </FirChip>

        </div>
        `
    })
};
