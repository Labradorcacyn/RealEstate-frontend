import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';
import { MaterialImportsModule } from './modules/material-imports.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ItemViviendaListaComponent } from './components/item-vivienda-lista/item-vivienda-lista.component';
import { ListViviendaComponent } from './components/list-vivienda/list-vivienda.component';
import { ShareMenuComponent } from './shared/share-menu/share-menu.component';
import { ListInmobiliariasComponent } from './components/list-inmobiliarias/list-inmobiliarias.component';
import { ItemInmobiliariaComponent } from './components/item-inmobiliaria/item-inmobiliaria.component';
import { DetalleViviendaComponent } from './components/detalle-vivienda/detalle-vivienda.component';
import { NuevaViviendaComponent } from './components/nueva-vivienda/nueva-vivienda.component';
import { InteresadosDialogComponent } from './dialog/interesados-dialog/interesados-dialog.component';
import { ViviendasTopComponent } from './components/viviendas-top/viviendas-top.component';
import { ItemPropietarioComponent } from './components/item-propietario/item-propietario.component';
import { ListPropietarioComponent } from './components/list-propietario/list-propietario.component';
import { DetallePropietarioComponent } from './components/detalle-propietario/detalle-propietario.component';
import { NuevaInmobiliariaComponent } from './components/nueva-inmobiliaria/nueva-inmobiliaria.component';
import { ViviendaFiltroListaComponent } from './components/vivienda-filtro-lista/vivienda-filtro-lista.component';
import { EditarViviendaComponent } from './components/editar-vivienda/editar-vivienda.component';
import { DetalleInmobiliariaComponent } from './components/detalle-inmobiliaria/detalle-inmobiliaria.component';
import { ListInteresadoComponent } from './components/list-interesado/list-interesado.component';
import { ItemInteresadoComponent } from './components/item-interesado/item-interesado.component';
import { DetalleInteresadoComponent } from './components/detalle-interesado/detalle-interesado.component';

@NgModule({
  declarations: [
    AppComponent,
    ListInmobiliariasComponent,
    ItemInmobiliariaComponent,
    ItemViviendaListaComponent,
    ListViviendaComponent,
    ShareMenuComponent,
    DetalleViviendaComponent,
    NuevaViviendaComponent,
    InteresadosDialogComponent,
    ViviendasTopComponent,
    ItemPropietarioComponent,
    ListPropietarioComponent,
    DetallePropietarioComponent,
    NuevaInmobiliariaComponent,
    EditarViviendaComponent,
    DetalleInmobiliariaComponent,
    ViviendaFiltroListaComponent,
    EditarViviendaComponent,
    ListInteresadoComponent,
    ItemInteresadoComponent,
    DetalleInteresadoComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialImportsModule,
    ReactiveFormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
