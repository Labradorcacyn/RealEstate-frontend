import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailPropietarioResponse, Vivienda } from 'src/app/interfaces/detail-propietario.interface';
import { PropietarioService } from 'src/app/services/propietario.service';
import { ViviendaServiceService } from 'src/app/services/vivienda-service.service';

@Component({
  selector: 'app-detalle-propietario',
  templateUrl: './detalle-propietario.component.html',
  styles: [
  ]
})
export class DetallePropietarioComponent implements OnInit {
  id!: number;
  detailProp!: DetailPropietarioResponse;
  viviendas!: Vivienda[];

  constructor(private propietarioService: PropietarioService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(parametro=>{
      this.id=parametro['id'];
      this.propietarioService.getPropietarioDetallado(this.id).subscribe(propietario=>{
        this.detailProp=propietario;
        this.viviendas=propietario.vivienda;
      });
    });
  }
  borrarPropietario(){
    this.propietarioService.deletePropietario(this.id).subscribe();
    alert("Se ha borrado correctamente")
  }
}
