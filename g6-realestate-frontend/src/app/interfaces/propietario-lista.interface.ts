export interface Propietario {
    id: number;
    nombre: string;
    apellidos: string;
    direccion: string;
    email: string;
    telefono: string;
    avatar: string;
}

export interface Sort {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
}

export interface infoPagina {
    sort: Sort;
    offset: number;
    pageSize: number;
    pageNumber: number;
    paged: boolean;
    unpaged: boolean;
}

export interface Sort2 {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
}

export interface PaginaCompletaPropietarioResponse {
    content: Propietario[];
    pageable: infoPagina;
    totalPages: number;
    totalElements: number;
    last: boolean;
    size: number;
    number: number;
    sort: Sort2;
    numberOfElements: number;
    first: boolean;
    empty: boolean;
}