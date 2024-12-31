import { InputHTMLAttributes } from 'vue';

export interface FirInputPasswordProps extends /** @vue-ignore */ Omit<InputHTMLAttributes, 'type'> {
    label?: string;
    error?: string;
}