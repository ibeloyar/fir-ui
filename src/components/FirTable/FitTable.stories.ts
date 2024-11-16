import type { Meta, StoryObj } from '@storybook/vue3';

import FirTable from './FirTable.vue';
import type { FirTableProps } from './FirTable.types.ts';

const meta = {
    title: 'Components/FirTable',
    component: FirTable,
    tags: ['autodocs'],
    argTypes: {},
    args: {},
    parameters: {},
} satisfies Meta<FirTableProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Filled: Story = {
    args: {
        columns: [{
            field: 'name',
            width: 300,
        }, {
            field: 'city',
        }, {
            field: 'age',
            width: 50,
            align: 'right',
        }],
        rows: [{
            id: 1,
            name: 'Dima',
            age: 31,
            city: 'Omsk',
        }, {
            id: 2,
            name: 'Alisa',
            age: 25,
            city: 'Omsk',
        }],
    },
};

