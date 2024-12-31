import type { Meta, StoryObj } from '@storybook/vue3';

import FirTextArea from './FirTextArea.vue';
import type { FirTextAreaProps } from './FirTextArea.types';

const meta = {
    title: 'Components/FirTextArea',
    component: FirTextArea,
    tags: ['autodocs'],
    argTypes: {
        value: { control: 'text', description: 'Input value', type: 'string' },
        placeholder: { control: 'text', description: 'Placeholder value', type: 'string' },
        error: { control: 'text', description: 'Error text', type: 'string' },
        disabled: { control: 'boolean', description: 'Is disabled', type: 'boolean' },
    },
 	args: {

    },
} satisfies Meta<FirTextAreaProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: 'Description',
        error: '',
        disabled: false,
        placeholder: 'Enter description',
    }
};