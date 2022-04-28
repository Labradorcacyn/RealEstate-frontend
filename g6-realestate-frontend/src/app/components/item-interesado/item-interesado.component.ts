import { Component, Input, OnInit } from '@angular/core';
import { GetInteresadosListaResponse } from 'src/app/interfaces/get-interesados-lista.interface';

@Component({
  selector: 'app-item-interesado',
  templateUrl: './item-interesado.component.html',
  styleUrls: ['./item-interesado.component.css']
})
export class ItemInteresadoComponent implements OnInit {

  @Input() interesadoInput!: GetInteresadosListaResponse;
  constructor() { }

  ngOnInit(): void {
  }

}
