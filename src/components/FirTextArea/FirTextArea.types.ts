import { TextareaHTMLAttributes } from 'vue';

export interface FirTextAreaProps extends /** @vue-ignore */ TextareaHTMLAttributes {
    label?: string;
    error?: string;
    resize?: boolean;
}