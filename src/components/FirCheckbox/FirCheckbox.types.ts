import { InputHTMLAttributes } from 'vue';

export interface FirCheckboxProps extends /** @vue-ignore */ Omit<InputHTMLAttributes, 'type'> {
    label?: string; 
    tooltip?: string; 
    error?: string; 
}