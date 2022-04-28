import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailInteresado, Vivienda } from 'src/app/interfaces/detail-interesado-response.interface';
import { InteresadosService } from 'src/app/services/interesados.service';

@Component({
  selector: 'app-detalle-interesado',
  templateUrl: './detalle-interesado.component.html',
  styleUrls: ['./detalle-interesado.component.css']
})
export class DetalleInteresadoComponent implements OnInit {

  id!: number;
  detailInt!: DetailInteresado;
  viviendas!: Vivienda[];

  constructor(private interesadoService: InteresadosService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(parametro=>{
      this.id=parametro['id'];
      this.interesadoService.getInteresadoDetail(this.id).subscribe(resultado => {
        this.detailInt=resultado;
        this.viviendas=resultado.viviendas;
      });
    });
  }

}
