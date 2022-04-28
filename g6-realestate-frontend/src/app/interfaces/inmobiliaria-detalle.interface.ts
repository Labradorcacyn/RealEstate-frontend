  export interface Vivienda {
      id: number;
      titulo: string;
      tipo: string;
      direccion: string;
      provincia: string;
      poblacion: string;
      avatar: string;
      precio: number;
      metrosCuadrados: number;
      numeroBanos: number;
      numeroHabitaciones: number;
  }

  export interface InmobiliariaDetalle {
      nombre: string;
      email: string;
      telefono: string;
      id: number;
      viviendas: Vivienda[];
  }

