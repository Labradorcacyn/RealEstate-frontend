import { Component, OnInit } from '@angular/core';
import { infoPagina, PaginaCompletaPropietarioResponse, Propietario } from 'src/app/interfaces/propietario-lista.interface';
import { PropietarioService } from 'src/app/services/propietario.service';

@Component({
  selector: 'app-list-propietario',
  templateUrl: './list-propietario.component.html',
  styleUrls: ['./list-propietario.component.css']
})
export class ListPropietarioComponent implements OnInit {
  contador=0;


  paginaEntera!:PaginaCompletaPropietarioResponse;
  propietarios!: Propietario[];
  paginaDatosProp!: infoPagina;


  constructor(private propietarioService:PropietarioService) { }

  ngOnInit(): void {
    this.propietarioService.getPropietariosPaginados(0).subscribe(pagina=>{
      this.paginaEntera=pagina;
      this.propietarios=pagina.content;
      this.paginaDatosProp=pagina.pageable;
      this.contador=pagina.pageable.pageNumber;
    })
  }

  pagePropietario(numero:number){
    let pagina:number=numero;
    this.propietarioService.getPropietariosPaginados(pagina).subscribe(pagina=>{
      this.paginaEntera=pagina;
      this.propietarios=pagina.content;
      this.paginaDatosProp=pagina.pageable
      this.contador=pagina.pageable.pageNumber;
    }); 
  }
  nextPagePropietario(){
    if(this.contador==6)
     this.contador;
    else if(this.contador<this.paginaEntera.totalPages){
      this.contador++;
    } 
    let siguiente:number=this.contador;
    this.propietarioService.getPropietariosPaginados(siguiente).subscribe(pagina=>{
      this.paginaEntera=pagina;
      this.propietarios=pagina.content;
      this.paginaDatosProp=pagina.pageable
      this.contador=pagina.pageable.pageNumber;
    }); 
  }

  afterPagePropietario(){
    if(this.contador>0)
      this.contador--;
    let atras:number=this.contador;
    this.propietarioService.getPropietariosPaginados(atras).subscribe(pagina=>{
      this.paginaEntera=pagina;
      this.propietarios=pagina.content;
      this.paginaDatosProp=pagina.pageable
      this.contador=pagina.pageable.pageNumber;
    });
 }

 firstPage(){
 this.ngOnInit();
    }

lastPage(){
  let ultima:number=this.paginaEntera.totalPages-1;
  this.propietarioService.getPropietariosPaginados(ultima).subscribe(pagina=>{
    this.paginaEntera=pagina;
    this.propietarios=pagina.content;
    this.paginaDatosProp=pagina.pageable
    this.contador=pagina.pageable.pageNumber;
  });
}

}
