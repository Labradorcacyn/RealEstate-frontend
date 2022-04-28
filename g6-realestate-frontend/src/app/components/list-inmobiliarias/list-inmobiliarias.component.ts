import { Component, OnInit } from '@angular/core';
import { InmobiliariaDetalle } from 'src/app/interfaces/inmobiliaria-detalle.interface';
import { Inmobiliaria } from 'src/app/interfaces/inmobiliarias.response.interface';
import { InmobiliariaService } from 'src/app/services/inmobiliaria.service';

@Component({
  selector: 'app-list-inmobiliarias',
  templateUrl: './list-inmobiliarias.component.html',
  styleUrls: ['./list-inmobiliarias.component.css']
})
export class ListInmobiliariasComponent implements OnInit {

  inmobiliariaList!: Inmobiliaria[];
  inmoDetalleList!: InmobiliariaDetalle;
  TotalPages!: number;
  contador=0;


  constructor(private inmobiliariaService: InmobiliariaService) { }

  ngOnInit(): void {
    this.inmobiliariaService.getInmobiliarias(0).subscribe(resp=>{
      this.inmobiliariaList=resp.content;
      this.contador=resp.pageable.pageNumber;
      this.TotalPages = resp.totalPages;
    })
    this.inmobiliariaService.getInmobiliariaDetallada(0).subscribe(response =>{
      this.inmoDetalleList.email = response.email;
      this.inmoDetalleList.id = response.id;
      this.inmoDetalleList.nombre = response.nombre;
      this.inmoDetalleList.telefono = response.telefono;
      this.inmoDetalleList.viviendas = response.viviendas;
    })
  }

  getNextPage(){
    if(this.contador<this.TotalPages){this.contador= this.contador+1;}

      this.inmobiliariaService.getInmobiliarias(this.contador).subscribe(p=>{
      this.inmobiliariaList=p.content;
      this.contador=p.pageable.pageNumber;
    })
  }

  getPreviousPage(){
    if(this.contador>0){this.contador= this.contador-1;}

      this.inmobiliariaService.getInmobiliarias(this.contador).subscribe(p=>{
      this.inmobiliariaList=p.content;
      this.contador=p.pageable.pageNumber;
    })
  }

}
