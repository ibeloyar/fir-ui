export type PopperPosition =
| 'bottom' | 'bottom-start' | 'bottom-end' 
| 'top' | 'top-end' | 'top-start' 
| 'left' | 'rigth';

export interface FirPopperProps {
    type: 'default' | 'click';
    position?: PopperPosition;
}