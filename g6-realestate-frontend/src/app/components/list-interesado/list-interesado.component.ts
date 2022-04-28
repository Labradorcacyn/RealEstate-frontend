import { Component, OnInit } from '@angular/core';
import { GetInteresadosListaResponse } from 'src/app/interfaces/get-interesados-lista.interface';
import { InteresadosService } from 'src/app/services/interesados.service';

@Component({
  selector: 'app-list-interesado',
  templateUrl: './list-interesado.component.html',
  styleUrls: ['./list-interesado.component.css']
})
export class ListInteresadoComponent implements OnInit {

  interesados!: GetInteresadosListaResponse[];

  constructor(private interesadoService: InteresadosService) { }

  ngOnInit(): void {
    this.getInteresados();
  }

  getInteresados() {
    this.interesadoService.getInteresadosLista().subscribe(resultado => {
      this.interesados = resultado;
    })
  }

}
