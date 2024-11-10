import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/vue3';

import FirModal from './FirModal.vue';
import type { FirModalProps } from './FirModal.types.ts';
import { WrapperModalDecorator } from '../../../.storybook/decorators/wrapperModal.decorator.ts';

const meta = {
    title: 'Components/FirModal',
    component: FirModal,
    tags: ['autodocs'],
    argTypes: {
        open: { type: 'boolean', description: 'Is open flag', control: 'boolean' }
    },
    args: {
        onClose: fn(),
    },
    parameters: {
        slots: {
            default: {
                description: 'Default slot',
                template: '{{ args.default }}',
            },
        }
    },
    decorators: [WrapperModalDecorator],
} satisfies Meta<FirModalProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { 
    args: {
        open: true,
        default: 'Modal content',
    }
};