import { ButtonHTMLAttributes } from 'vue';

export interface FirSwitchProps extends /** @vue-ignore */ Omit<ButtonHTMLAttributes, 'value'> {
    value: boolean;
    label?: string;
}