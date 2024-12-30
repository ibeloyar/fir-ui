import { InputHTMLAttributes } from 'vue';

export interface FirInputTextProps extends /** @vue-ignore */ Omit<InputHTMLAttributes, 'type'> {
    label?: string;
    error?: string;
    clean?: boolean;
}