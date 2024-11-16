<template>
    <table class="fir-table__wrapper">
        <thead class="fir-table__head">
            <tr>
                <th 
                    v-for="column in props.columns" 
                    v-bind:key="column.field"
                    v-bind:align="column.align || 'left'"
                    v-bind:width="column.width || 'auto'"
                >
                    {{ column.field }}
                </th>
            </tr>
        </thead>
        <tbody>
            <tr 
                v-for="row in props.rows" 
                v-bind:key="row.id"
            >
                <template 
                    v-for="column in props.columns" 
                    v-bind:key="column.field+row.id"
                >
                    <td 
                        v-if="row[column.field]"
                        v-bind:align="column.align"
                    >
                        {{ row[column.field] }}
                    </td>
                    <td v-else>--</td>            
                </template>
            </tr>
        </tbody>
        <!-- <tfoot>
            <tr>
                <th scope="row" colspan="2">Average age</th>
                <td>33</td>
            </tr>
        </tfoot> -->
    </table>
</template>

<script setup lang="ts">
import { FirTableProps } from './FirTable.types';

const props = defineProps<FirTableProps>();
</script>

<style>
    .fir-table__wrapper {
        width: 100%;
        border-radius: var(--fir-table-border-radius);
        border-collapse: collapse;
    }
    .fir-table__head {
        border-bottom: var(--fir-table-border);
    }
</style>