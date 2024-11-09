import type { Meta, StoryObj } from '@storybook/vue3';

import FirInput from './FirInput.vue';
import type { FirInputProps } from './FirInput.types.ts';

const meta = {
    title: 'Example/FirInput',
    component: FirInput,
    tags: ['autodocs'],
	argTypes: {
		value: { control: 'text', description: 'Input value', type: 'string' },
		error: { control: 'text', description: 'Error text', type: 'string' },
	},
 	args: {
		type: 'text',
	},
} satisfies Meta<FirInputProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		error: 'test error',
	}
};
