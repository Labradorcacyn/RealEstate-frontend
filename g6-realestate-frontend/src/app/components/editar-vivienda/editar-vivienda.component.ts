import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ViviendaDetalleResponse } from 'src/app/interfaces/vivienda-detalle.interface';
import { ViviendaDto } from 'src/app/interfaces/vivienda-objeto.interface';
import { ViviendaServiceService } from 'src/app/services/vivienda-service.service';

@Component({
  selector: 'app-editar-vivienda',
  templateUrl: './editar-vivienda.component.html',
  styleUrls: ['./editar-vivienda.component.css']
})
export class EditarViviendaComponent implements OnInit {
  viviendaDetalle!: ViviendaDetalleResponse;
  viviendaOb= new ViviendaDto();
  id!: number;

  constructor(private viviendaService: ViviendaServiceService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.viviendaService.getViviendaDetallada(this.id).subscribe(vivienda => {
        this.viviendaDetalle = vivienda;
        this.viviendaOb = vivienda;
      });
    });
  }

  ngOnInit(): void {
  }


  save(event: Event) {
    event.preventDefault();
    if (this.viviendaDetalle.descripcion === '') {
      alert("Descripción no puede estar vacío")
    }
    if (this.viviendaDetalle.titulo === '') {
      alert("Título no puede estar vacío")
    }
    if (this.viviendaDetalle.precio < 0) {
      alert("El precio no puede ser menor que 0€")
    }
    if (this.viviendaDetalle.latLng === '' || this.viviendaDetalle.poblacion === '' || this.viviendaDetalle.provincia === ''
    || this.viviendaDetalle.codPostal === '' || this.viviendaDetalle.direccion === '') {
      alert("Faltan datos en la dirección")
    }
    if (this.viviendaDetalle.metrosCuadrados < 0) {
      alert("Los metros cuadros no pueden ser menor que 0 metros")
    }
    if (this.viviendaDetalle.numBanos < 0 || this.viviendaDetalle.numHabitaciones < 0) {
      alert("El número no puede ser menor de 0")
    }else {this.viviendaService.putVivienda(this.viviendaDetalle,this.id).subscribe();
      alert("Se ha actualizado con exito");
    }
  }
}
