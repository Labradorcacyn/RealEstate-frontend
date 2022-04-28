import { Component, OnInit } from '@angular/core';
import { Inmo, Inmobiliaria } from 'src/app/interfaces/inmobiliarias.response.interface';
import { InmobiliariaService } from 'src/app/services/inmobiliaria.service';

@Component({
  selector: 'app-nueva-inmobiliaria',
  templateUrl: './nueva-inmobiliaria.component.html',
  styleUrls: ['./nueva-inmobiliaria.component.css']
})
export class NuevaInmobiliariaComponent implements OnInit {

  inmo = new Inmo();
  inmobiliaria!:Inmobiliaria;
  value=0;

  constructor(private inmobiliariaService:InmobiliariaService) { }

  ngOnInit(): void {
  }

  registrar(){
    this.inmobiliariaService.postInmobiliaria(this.inmo).subscribe(inmobiliaria=>{
      this.inmo=inmobiliaria;
    })
  }

  addInmobiliaria(){
    if (this.inmo.email=="" ||
        this.inmo.nombre=="" ||
        this.inmo.telefono=="" ) {
      alert("Es necesario completar todos los campos")
    }
    else{
      this.registrar();
      alert("Se ha registrado la nueva inmobiliaria")
    }
  }
}
