export interface FirChipProps {
    type?: 'default' | 'double';
    view?: 'filled' | 'outlined';
    color: 'custom' | 'red' | 'yellow' | 'green' | 'blue' | 'gray';
    bgCustomColor?: string; 
    textCustomColor?: string; 
    title?: string;
    onClick?: () => void;
}