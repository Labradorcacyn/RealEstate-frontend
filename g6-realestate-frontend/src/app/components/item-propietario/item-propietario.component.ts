import { Component, Input, OnInit } from '@angular/core';
import { Propietario } from 'src/app/interfaces/propietario-lista.interface';

@Component({
  selector: 'app-item-propietario',
  templateUrl: './item-propietario.component.html',
  styleUrls: ['./item-propietario-component.css']
})
export class ItemPropietarioComponent implements OnInit {
  @Input() propietarioInput!:Propietario;
  constructor() { }

  ngOnInit(): void {
  }

}
