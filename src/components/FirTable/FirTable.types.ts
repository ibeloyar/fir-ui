export interface FirTableColumn {
    field: string;
    align?: 'left' | 'center' | 'right';
    width?: number;
}

export type FirTableColumns = FirTableColumn[];

export type FirTableRowValue = string | number | boolean;

export interface FirTableRow extends Record<string, FirTableRowValue> {
    id: number | string;
}

export interface FirTableProps {
    rows: FirTableRow[];
    columns: FirTableColumn[];
}