export type PopperPosition =
| 'bottom' | 'bottom-start' | 'bottom-end' 
| 'top' | 'top-end' | 'top-start' 
| 'left' | 'rigth' | 'auto';

export interface FirPopperProps {
    type: 'default' | 'click';
    position?: PopperPosition;
}