import { Component, OnInit } from '@angular/core';
import { PropietarioBasicResponse } from 'src/app/interfaces/propietariosListaBasica.interface';
import { ViviendaDetalleResponse } from 'src/app/interfaces/vivienda-detalle.interface';
import { ViviendaPropietarioDto } from 'src/app/interfaces/vivienda-propietario.interface';
import { PropietarioService } from 'src/app/services/propietario.service';
import { ViviendaServiceService } from 'src/app/services/vivienda-service.service';

@Component({
  selector: 'app-nueva-vivienda',
  templateUrl: './nueva-vivienda.component.html',
  styleUrls: ['./nueva-vivienda.component.css']
})
export class NuevaViviendaComponent implements OnInit {

  registerDto=new ViviendaPropietarioDto();
  viviendaDetalle!:ViviendaDetalleResponse;
  listaProp?:PropietarioBasicResponse[];
  value=0;

  constructor(private viviendaService:ViviendaServiceService,private propietarioService:PropietarioService) { }

  ngOnInit(): void {
    this.propietarioService.getListaPropietarioBasica().subscribe(result=>{
      this.listaProp=result;
    })
  }

  doRegister(){
    this.viviendaService.postVIviendaPropietario(this.registerDto).subscribe(viviendaRespuesta=>{
      this.viviendaDetalle=viviendaRespuesta;
    })
  }

  addPropietario(n:number){
    if(n==-1)
    this.value=-1;
    else
    this.value=1;
  }
   
  valida(){
    if(this.registerDto.titulo==""||
       this.registerDto.tipo=="" ||
       this.registerDto.metrosCuadrados==0 ||
       this.registerDto.precio==0 ||
       this.registerDto.direccion=="" ||
       this.registerDto.poblacion=="" ||
       this.registerDto.provincia=="" ||
       this.registerDto.codPostal=="" ||
       this.registerDto.numBanos==0  ||
       this.registerDto.numHabitaciones==0 ){
        alert("Cumplimente todos los campos")
       }
       else{
         this.doRegister();
         alert("Se ha registrado correctamente")
       }
    }
  
}
