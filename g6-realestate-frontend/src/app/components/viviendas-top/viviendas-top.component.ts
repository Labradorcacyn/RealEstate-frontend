import { Component, Input, OnInit } from '@angular/core';
import { ViviendasTopResponse } from 'src/app/interfaces/viviendas-top.interface';
import { ViviendaServiceService } from 'src/app/services/vivienda-service.service';

@Component({
  selector: 'app-viviendas-top',
  templateUrl: './viviendas-top.component.html',
  styleUrls: ['./viviendas-top.component.css']
})
export class ViviendasTopComponent implements OnInit {

  constructor(private viviendaService: ViviendaServiceService) { }

  @Input() viviendas!: ViviendasTopResponse[];

  ngOnInit(): void {
    this.getViviendasTop(10);
  }

  getViviendasTop(numero: number) {
    this.viviendaService.getViviendasTop(numero).subscribe(resultado => {
      this.viviendas = resultado;
    })
  }

}
