import type { Meta, StoryObj } from '@storybook/vue3';

import FirAccordion from './FirAccordion.vue';
import type { FirAccordionProps } from './FirAccordion.types.ts';

const meta = {
    title: 'Components/FirAccordion',
    component: FirAccordion,
    tags: ['autodocs'],
} satisfies Meta<FirAccordionProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: 'Accordion',
        default: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
        nisi ut aliquip ex ea commodo consequat`
    },
};
