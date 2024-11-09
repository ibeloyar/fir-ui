import { ButtonHTMLAttributes } from 'vue';

export interface FirButtonProps extends /** @vue-ignore */ ButtonHTMLAttributes {
    view?: 'filled' | 'outline' | 'clear';
    size?: 'small' | 'medium' | 'large';
}