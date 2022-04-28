import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InmobiliariaDetalle, Vivienda } from 'src/app/interfaces/inmobiliaria-detalle.interface';
import { InmobiliariaService } from 'src/app/services/inmobiliaria.service';

@Component({
  selector: 'app-detalle-inmobiliaria',
  templateUrl: './detalle-inmobiliaria.component.html',
  styleUrls: ['./detalle-inmobiliaria.component.css']
})
export class DetalleInmobiliariaComponent implements OnInit {

  inmoDetalle!: InmobiliariaDetalle;
  id!: number;
  viviendas!: Vivienda[];

  constructor(private inmobiliariaService: InmobiliariaService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.params.subscribe(param => {
      this.id = param["id"];
      console.log(this.id);
      this.inmobiliariaService.getInmobiliariaDetallada(this.id).subscribe(inmo => {
        this.inmoDetalle = inmo;
        this.viviendas = inmo.viviendas;
      })
    })

  }

  borrarInmobiliaria(){
    this.inmobiliariaService.deleteInmobiliaria(this.id).subscribe();
    alert("Se ha borrado correctamente")
  }
}
