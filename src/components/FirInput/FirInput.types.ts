import { InputHTMLAttributes } from 'vue';

export interface FirInputProps extends /** @vue-ignore */ Omit<InputHTMLAttributes, 'type'> {
    label?: string;
    error?: string;
}