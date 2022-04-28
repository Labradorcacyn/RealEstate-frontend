import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ViviendaFiltroResponse } from 'src/app/interfaces/vivienda-filtro.interface';
import { ViviendaServiceService } from 'src/app/services/vivienda-service.service';

@Component({
  selector: 'app-vivienda-filtro-lista',
  templateUrl: './vivienda-filtro-lista.component.html',
  styleUrls: ['./vivienda-filtro-lista.component.css']
})
export class ViviendaFiltroListaComponent implements OnInit {

  listaVivienda?:ViviendaFiltroResponse[];

  val=-1;

  search="";

  direccion="";
  poblacion="";
  provincia="";
  metrosCuadrados=0;
  numBanos=0;
  numHabitaciones=0;
  tienePiscina=false;
  tieneGaraje=false;
  tieneAscensor=false;
  precio=0;
  tipo="";

  filtrar(){
    this.search="";
    if(this.direccion!="")
    this.search="direccion:"+this.direccion+",";
    if(this.poblacion!="")
    this.search=this.search+"poblacion:"+this.poblacion+",";
    if(this.provincia!="")
    this.search=this.search+"provincia:"+this.provincia+",";
    if(this.precio!=0)
    this.search=this.search+"precio<"+this.precio+","
    this.search=this.search+"metrosCuadrados>"+this.metrosCuadrados+",";
    this.search=this.search+"numBanos>"+this.numBanos+",";
    this.search=this.search+"numHabitaciones>"+this.numHabitaciones+",";
   
    
    this.viviendaService.getViviendasFiltradas(this.search).subscribe(lista=>{
      this.listaVivienda=lista;
    })
    
  }
  constructor(private viviendaService:ViviendaServiceService) { }

  ngOnInit(): void {
    this.viviendaService.getViviendasFiltradas(this.search).subscribe(lista=>{
      this.listaVivienda=lista;
})}

cambiarTipo(nu:number){
  if(nu==0){
    this.val=0;
    this.tipo="Venta"
  }else if(nu==1){
    this.val=1;
    this.tipo="Alquiler"
  }else if(nu==2){
    this.val=2;
    this.tipo="Obra_nueva"
  }
}
}