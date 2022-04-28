import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleInmobiliariaComponent } from '../components/detalle-inmobiliaria/detalle-inmobiliaria.component';
import { DetalleInteresadoComponent } from '../components/detalle-interesado/detalle-interesado.component';
import { DetallePropietarioComponent } from '../components/detalle-propietario/detalle-propietario.component';
import { DetalleViviendaComponent } from '../components/detalle-vivienda/detalle-vivienda.component';
import { EditarViviendaComponent } from '../components/editar-vivienda/editar-vivienda.component';
import { ListInmobiliariasComponent } from '../components/list-inmobiliarias/list-inmobiliarias.component';
import { ListInteresadoComponent } from '../components/list-interesado/list-interesado.component';
import { ListPropietarioComponent } from '../components/list-propietario/list-propietario.component';
import { ListViviendaComponent } from '../components/list-vivienda/list-vivienda.component';
import { NuevaInmobiliariaComponent } from '../components/nueva-inmobiliaria/nueva-inmobiliaria.component';
import { NuevaViviendaComponent } from '../components/nueva-vivienda/nueva-vivienda.component';
import { ViviendaFiltroListaComponent } from '../components/vivienda-filtro-lista/vivienda-filtro-lista.component';
import { ShareMenuComponent } from '../shared/share-menu/share-menu.component';

const routes: Routes = [
  { path: 'listaInmobiliaria', component:ListInmobiliariasComponent},
  { path: 'vivienda/nueva', component:NuevaViviendaComponent},
  { path: 'inmobiliaria/nueva', component:NuevaInmobiliariaComponent},
  { path: 'vivienda', component:ListViviendaComponent},
  { path: 'vivienda/detalle/edit/:id', component:EditarViviendaComponent},
  { path: 'inmobiliaria/detalle/:id', component:DetalleInmobiliariaComponent},
  { path: 'propietario', component:ListPropietarioComponent},
  { path: 'interesado', component:ListInteresadoComponent},
  { path: 'propietario/detalle/:id', component:DetallePropietarioComponent},
  { path: 'interesado/detalle/:id', component:DetalleInteresadoComponent},
  { path:  'vivienda/detalle/:id', component:DetalleViviendaComponent},
  { path: 'menu', component:ShareMenuComponent},
  { path: 'vivienda/filtro', component:ViviendaFiltroListaComponent},
  { path: '**', redirectTo:'vivienda'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
