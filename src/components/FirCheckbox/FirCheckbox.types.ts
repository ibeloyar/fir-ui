import { InputHTMLAttributes } from 'vue';

export interface FirCheckboxProps extends /** @vue-ignore */ Omit<InputHTMLAttributes, 'type'> {
    size?: 'small' | 'medium' | 'large';
}