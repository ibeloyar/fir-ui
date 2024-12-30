export type FirSelectItem = string | {
    label: string;
    value: string;
} 

export interface FirSelectProps {
    value: string;
    options: string[];
    error?: string;
    label?: string;
    disabled?: boolean;
    placeholder?: string;
}