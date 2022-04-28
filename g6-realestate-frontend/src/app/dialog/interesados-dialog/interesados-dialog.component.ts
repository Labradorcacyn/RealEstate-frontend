import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DetalleViviendaComponent } from 'src/app/components/detalle-vivienda/detalle-vivienda.component';
import { AllInteresados } from 'src/app/interfaces/all-interesados-response.interface';
import { InteresadoExistenteResponse } from 'src/app/interfaces/interesado-existente-response.interface';
import { PostInteresaDto } from 'src/app/interfaces/post-interesa-dto.interface';
import { InteresadosService } from 'src/app/services/interesados.service';
import { ViviendaServiceService } from 'src/app/services/vivienda-service.service';

export interface AllInteresadosData{
  nombre:string,
  apellidos:string
}

@Component({
  selector: 'app-interesados-dialog',
  templateUrl: './interesados-dialog.component.html',
  styleUrls: ['./interesados-dialog.component.css']
})
export class InteresadosDialogComponent implements OnInit {
  interesados!: AllInteresados[];
  idVivienda!: number;
  idInteresado!: number;

  nInteresa: number = 1;

  nombre!: string;
  apellidos!: string;
  direccion!: string;
  email!: string;
  telefono!: string;
  avatar!: string;
  mensaje!: string;

  idInteresadoBorrar!: number;

  constructor(@Inject(MAT_DIALOG_DATA) private data: AllInteresadosData,
  private interesadosService: InteresadosService,
  private viviendaService: ViviendaServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.interesadosService.getInteresados().subscribe(result=>{
      this.interesados=result;
    });

    this.route.params.subscribe(param=>{this.idVivienda=param['id']});
  }
  AddInteresado() {
    this.nInteresa=1;
  }
  nuevoInteresa() {
    this.nInteresa=2;
  }
  borrarInteresa() {
    this.nInteresa=3;
  }

  ingresarInteresa() {
    let interesa: PostInteresaDto = new PostInteresaDto();
    interesa.nombre=this.nombre;
    interesa.apellidos=this.apellidos;
    interesa.direccion=this.direccion;
    interesa.email=this.email;
    interesa.telefono=this.telefono;
    interesa.avatar=this.avatar;
    interesa.mensaje=this.mensaje;

    this.viviendaService.postInteresado(interesa, this.idVivienda).subscribe();

    alert("Se ha ingresado el interesado correctamente.");

  }

  meInteresaInteresadoLog(){
    this.viviendaService.postInteresadoExistente(this.idVivienda,this.idInteresado).subscribe();
    alert("Se ha ingresado el interesado correctamente.");
  }

}
