import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/vue3';

import FirBreadcrumbs from './FirBreadcrumbs.vue';
import type { FirBreadcrumbsProps } from './FirBreadcrumbs.types.ts';

const meta = {
    title: 'Components/FirBreadcrumbs',
    component: FirBreadcrumbs,
    tags: ['autodocs'],
} satisfies Meta<FirBreadcrumbsProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        list: [
            { name: 'first' },
            { name: 'second' },
            { name: 'third', onClick: fn() }
        ],
    },
};
