import type { Meta, StoryObj } from '@storybook/vue3';

import FirLink from './FirLink.vue';
import type { FirLinkProps } from './FirLink.types.ts';

const meta = {
    title: 'Components/FirLink',
    component: FirLink,
    tags: ['autodocs'],
    argTypes: {},
    args: {
        href: 'https://example.com'
    },
    parameters: {
        slots: {
            default: {
                description: 'Default slot',
                template: '{{ args.default }}',
            },
        }
    },
} satisfies Meta<FirLinkProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        default: 'Link',
    },
};

