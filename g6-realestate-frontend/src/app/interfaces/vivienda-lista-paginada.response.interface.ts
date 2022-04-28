 export interface Vivienda {
        id:number;
        titulo: string;
        precio: number;
        tipo:string;
        direccion:string;
        poblacion:string;
        provincia:string;
        metrosCuadrados: number;
        numeroBanos: number;
        numeroHabitaciones: number;
        avatar:string;
    }

    export interface Sort {
        empty: boolean;
        sorted: boolean;
        unsorted: boolean;
    }

    export interface infoPagina {
        sort: Sort;
        offset: number;
        pageNumber: number;
        pageSize: number;
        paged: boolean;
        unpaged: boolean;
    }

    export interface Sort2 {
        empty: boolean;
        sorted: boolean;
        unsorted: boolean;
    }

    export interface PaginaCompletaViviendaResponse {
        content: Vivienda[];
        pageable: infoPagina;
        last: boolean;
        totalPages: number;
        totalElements: number;
        size: number;
        number: number;
        sort: Sort2;
        first: boolean;
        numberOfElements: number;
        empty: boolean;
    }

