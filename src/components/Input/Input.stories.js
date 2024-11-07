import { fn } from '@storybook/test';

import Input from './Input.vue';

import { StyleDecorator } from '../../../.storybook/decorators/style.decorator.js';

const meta = {
    title: 'Example/Input',
    component: Input,
    tags: ['autodocs'],
	argTypes: {
		value: { control: 'text', description: 'Input value', type: 'string' },
		error: { control: 'text', description: 'Error text', type: 'string' },
	},
 	args: {
		type: 'text'
	},
	decorators: StyleDecorator,
}

export default meta;

export const Default = {
  	args: {
    	value: 'Hello Fir',
    	error: 'err',
  	},
};
