import { Component, Input, OnInit } from '@angular/core';
import { Vivienda } from 'src/app/interfaces/vivienda-lista-paginada.response.interface';

@Component({
  selector: 'app-item-vivienda-lista',
  templateUrl: './item-vivienda-lista.component.html',
  styleUrls: ['./item-vivienda-lista.component.css']
})
export class ItemViviendaListaComponent implements OnInit {
  @Input() viviendaInput!:Vivienda;
  constructor() { }

  ngOnInit(): void {
  }

}
