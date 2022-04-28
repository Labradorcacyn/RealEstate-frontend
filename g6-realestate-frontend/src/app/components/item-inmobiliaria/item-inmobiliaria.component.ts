import { Component, Input, OnInit } from '@angular/core';
import { InmobiliariaDetalle } from 'src/app/interfaces/inmobiliaria-detalle.interface';
import { Inmobiliaria } from 'src/app/interfaces/inmobiliarias.response.interface';

@Component({
  selector: 'app-item-inmobiliaria',
  templateUrl: './item-inmobiliaria.component.html',
  styleUrls: ['./item-inmobiliaria.component.css']
})
export class ItemInmobiliariaComponent implements OnInit {

  @Input() inmobiliaria!: Inmobiliaria;
  @Input() inmoDetalle!: InmobiliariaDetalle;
  constructor() { }

  ngOnInit(): void {

  }

}
