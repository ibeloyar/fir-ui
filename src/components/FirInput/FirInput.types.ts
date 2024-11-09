import { InputHTMLAttributes } from 'vue';

export interface FirInputProps extends /** @vue-ignore */ InputHTMLAttributes {
    label?: string;
    error?: string;
}