export interface FirChipProps {
    view?: 'filled' | 'outlined' | 'double';
    color: 'custom' | 'red' | 'yellow' | 'green' | 'blue' | 'gray';
    bgCustomColor?: string; 
    textCustomColor?: string; 
    titleCustomColor?: string;
    title?: string;
    onClick?: () => void;
}