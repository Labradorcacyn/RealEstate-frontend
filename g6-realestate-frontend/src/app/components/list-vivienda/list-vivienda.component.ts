import { Component, OnInit } from '@angular/core';
import { infoPagina, PaginaCompletaViviendaResponse, Vivienda } from 'src/app/interfaces/vivienda-lista-paginada.response.interface';
import { ViviendaServiceService } from 'src/app/services/vivienda-service.service';

@Component({
  selector: 'app-list-vivienda',
  templateUrl: './list-vivienda.component.html',
  styleUrls: ['./list-vivienda.component.css']
})
export class ListViviendaComponent implements OnInit {
  contador=0;

  paginaEntera!:PaginaCompletaViviendaResponse;
  viviendas!:Vivienda[];
  paginaDatos!:infoPagina;

  constructor(private viviendaService:ViviendaServiceService) { }

  ngOnInit(): void {
    this.viviendaService.getViviendasPaginadas(0).subscribe(pagina=>{
      this.paginaEntera=pagina;
      this.viviendas=pagina.content;
      this.paginaDatos=pagina.pageable
      this.contador=pagina.pageable.pageNumber;
    })
  }


  pageVivienda(numero:number){
    let pagina:number=numero;
    this.viviendaService.getViviendasPaginadas(pagina).subscribe(pagina=>{
      this.paginaEntera=pagina;
      this.viviendas=pagina.content;
      this.paginaDatos=pagina.pageable
      this.contador=pagina.pageable.pageNumber;
    }); 
  }
  nextPageVivienda(){
    if(this.contador==this.paginaEntera.totalPages-1)
     this.contador;
    else if(this.contador<this.paginaEntera.totalPages){
      this.contador++;
    } 
    let siguiente:number=this.contador;
    this.viviendaService.getViviendasPaginadas(siguiente).subscribe(pagina=>{
      this.paginaEntera=pagina;
      this.viviendas=pagina.content;
      this.paginaDatos=pagina.pageable
      this.contador=pagina.pageable.pageNumber;
    }); 
  }

  afterPageVivienda(){
    if(this.contador>0)
      this.contador--;
    let atras:number=this.contador;
    this.viviendaService.getViviendasPaginadas(atras).subscribe(pagina=>{
      this.paginaEntera=pagina;
      this.viviendas=pagina.content;
      this.paginaDatos=pagina.pageable
      this.contador=pagina.pageable.pageNumber;
    });
 }

 firstPage(){
 this.ngOnInit();
    }

lastPage(){
  let ultima:number=this.paginaEntera.totalPages-1;
  this.viviendaService.getViviendasPaginadas(ultima).subscribe(pagina=>{
    this.paginaEntera=pagina;
    this.viviendas=pagina.content;
    this.paginaDatos=pagina.pageable
    this.contador=pagina.pageable.pageNumber;
  });
}

}