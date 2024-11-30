export interface FirBreadcrumbsProps {
    list: FirBreadcrumb[];
}

export interface FirBreadcrumb {
    name: string;
    onClick?: () => void;
    isLoading?: boolean;
}