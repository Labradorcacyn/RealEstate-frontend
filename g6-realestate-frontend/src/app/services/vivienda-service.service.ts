import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { InteresadoExistenteResponse } from '../interfaces/interesado-existente-response.interface';
import { PostInteresaDto } from '../interfaces/post-interesa-dto.interface';
import { ViviendaDetalleResponse } from '../interfaces/vivienda-detalle.interface';
import { ViviendaFiltroResponse } from '../interfaces/vivienda-filtro.interface';
import { PaginaCompletaViviendaResponse } from '../interfaces/vivienda-lista-paginada.response.interface';
import { ViviendaPropietarioDto } from '../interfaces/vivienda-propietario.interface';
import { ViviendasTopResponse } from '../interfaces/viviendas-top.interface';

const URL_VIVIENDA="/vivienda/"

const DEFAULT_HEADERS = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class ViviendaServiceService {

  constructor(private http: HttpClient) { }

  getViviendasPaginadas(pagina:number):Observable<PaginaCompletaViviendaResponse>{
    let url=environment.apiBaseUrl;
    return this.http.get<PaginaCompletaViviendaResponse>(`${url}${URL_VIVIENDA}?page=${pagina}`);
  }

  getViviendaDetallada(id:number):Observable<ViviendaDetalleResponse>{
    let url=environment.apiBaseUrl;
    return this.http.get<ViviendaDetalleResponse>(`${url}${URL_VIVIENDA}${id}`);
  }

  postVIviendaPropietario(viviendaPropietarioDto:ViviendaPropietarioDto):Observable<ViviendaDetalleResponse>{
    let url=`${environment.apiBaseUrl}${URL_VIVIENDA}`;
    return this.http.post<ViviendaDetalleResponse>(url,viviendaPropietarioDto, DEFAULT_HEADERS)
  }

  getViviendasTop(numero: number) {
    let url = `${environment.apiBaseUrl}${URL_VIVIENDA}top?n=${numero}`
    return this.http.get<ViviendasTopResponse[]>(url);
  }
  postInteresado(dto: PostInteresaDto, id: number): Observable<PostInteresaDto> {
    let url: string = `${environment.apiBaseUrl}${URL_VIVIENDA}${id}/meinteresa`
    return this.http.post<PostInteresaDto>(url, dto, DEFAULT_HEADERS);
  }

  postInteresadoExistente(id1: number, id2:number): Observable<InteresadoExistenteResponse>{
    let url: string = `${environment.apiBaseUrl}${URL_VIVIENDA}${id1}/meinteresa/${id2}`
    return this.http.post<InteresadoExistenteResponse>(url, DEFAULT_HEADERS);
  }

  deleteVivienda(id:number){
    let url=`http://localhost:8080/vivienda/${id}`;
    return this.http.delete<any>(url);
  }

  deleteAsocViviInmo(id:number){
    let url=`http://localhost:8080/vivienda/${id}/inmobiliaria`;
    return this.http.delete<any>(url);
  }

  postViviendaInmobiliaria(id1:number,id2:number){
    let url= `${environment.apiBaseUrl}${URL_VIVIENDA}${id1}/inmobiliaria/${id2}`;
    return this.http.post<any>(url,undefined,DEFAULT_HEADERS);
  }


  getViviendasFiltradas(filtro:string):Observable<ViviendaFiltroResponse[]>{
    // ${filtro}
    let url=`${environment.apiBaseUrl}${URL_VIVIENDA}/filtro/?search=${filtro}`;
    return this.http.get<ViviendaFiltroResponse[]>(url);
  }

putVivienda(vivienda: ViviendaDetalleResponse, id: number):Observable<ViviendaDetalleResponse>{
  return this.http.put<ViviendaDetalleResponse>(`http://localhost:8080/vivienda/${id}`,vivienda, DEFAULT_HEADERS)
}

}
