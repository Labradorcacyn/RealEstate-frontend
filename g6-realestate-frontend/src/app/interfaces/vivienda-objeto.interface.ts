export class ViviendaDto{

    // VIVIENDA
    titulo:string;
    descripcion:string;
    avatar:string;
    latLng:string;
    direccion:string;
    codPostal:string;
    poblacion:string;
    provincia:string;

    tipo:string;

    tienePiscina:boolean;
    tieneAscensor:boolean;
    tieneGaraje:boolean;

    precio:number;
    metrosCuadrados:number;

    constructor(){
        this.titulo='';
        this.descripcion='';
        this.avatar='';
        this.latLng='';
        this.descripcion='';
        this.direccion='';
        this.codPostal='';
        this.poblacion='';
        this.provincia='';
        this.tipo='';
        this.tieneAscensor=false;
        this.tienePiscina=false;
        this.tieneGaraje=false;
        this.precio=0;
        this.metrosCuadrados=0;
    }
}