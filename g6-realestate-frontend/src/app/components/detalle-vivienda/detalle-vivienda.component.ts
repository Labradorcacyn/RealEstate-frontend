import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { InteresadosDialogComponent } from 'src/app/dialog/interesados-dialog/interesados-dialog.component';
import { InmobiliariaBasicResponse } from 'src/app/interfaces/propietariosListaBasica.interface';
import { TotalInteresados } from 'src/app/interfaces/total-interesados-response.interface';
import { ViviendaDetalleResponse } from 'src/app/interfaces/vivienda-detalle.interface';
import { InmobiliariaService } from 'src/app/services/inmobiliaria.service';
import { ViviendaServiceService } from 'src/app/services/vivienda-service.service';

@Component({
  selector: 'app-detalle-vivienda',
  templateUrl: './detalle-vivienda.component.html',
  styleUrls: ['./detalle-vivienda.component.css']
})
export class DetalleViviendaComponent implements OnInit {
  viviendaDetalle!:ViviendaDetalleResponse;
  interesados!: TotalInteresados;
  inter!: TotalInteresados;
  total=0;
  private routeSub!: Subscription
  id!:number;
  idInmobiliaria!:number;
  listaInmobiliarias!:InmobiliariaBasicResponse[];
  inmobiliaria?:InmobiliariaBasicResponse;

  constructor(private viviendaService:ViviendaServiceService,private route: ActivatedRoute, private dialog: MatDialog,private inmobiliariaService:InmobiliariaService) { }

  ngOnInit(): void {
    this.inmobiliariaService.getInmobiliariaShort().subscribe(lista=>{
      this.listaInmobiliarias=lista;
    });


    this.routeSub=this.route.params.subscribe(param=>{
    this.id=param['id'];
    this.viviendaService.getViviendaDetallada(this.id).subscribe(vivienda=>{
      this.viviendaDetalle=vivienda;
    })
    })

    if(this.viviendaDetalle.inmobiliariaNombre==undefined)
    this.viviendaDetalle.inmobiliariaNombre="Sin asignar";

    this.total = this.interesados.totalInteresados;
  }

  openDialog(){
      this.dialog.open(InteresadosDialogComponent, {
        height: '600px',
        width: '520px',
        data: {idVivivenda: this.id}
      });
  }

  borrarVivienda(){
    this.viviendaService.deleteVivienda(this.id).subscribe();
    alert("Se ha borrado correctamente")
  }

  borrarAsocViviInmo(){
    this.viviendaService.deleteAsocViviInmo(this.id).subscribe();
    alert("Se ha eliminado la asociacion con esta inmobiliaria")
  }

  valida(){
    if(this.idInmobiliaria==undefined){
      alert("Seleccione una Inmobiliaria")
    }
    else{
      this.viviendaService.postViviendaInmobiliaria(this.id,this.idInmobiliaria).subscribe();
      alert("La asocicaicón se hizo correctamente")
    }
  }
}
