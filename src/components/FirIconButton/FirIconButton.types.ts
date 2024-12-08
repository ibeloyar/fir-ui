import { ButtonHTMLAttributes } from 'vue';

export interface FirIconButtonProps extends /** @vue-ignore */ ButtonHTMLAttributes {
    size?: 'small' | 'medium' | 'large';
}