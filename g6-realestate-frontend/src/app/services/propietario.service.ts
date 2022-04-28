import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DetailPropietarioResponse } from '../interfaces/detail-propietario.interface';
import { PaginaCompletaPropietarioResponse } from '../interfaces/propietario-lista.interface';
import { PropietarioBasicResponse } from '../interfaces/propietariosListaBasica.interface';

const URL_PROPIETARIO="/propietario/"


@Injectable({
  providedIn: 'root'
})
export class PropietarioService {

  constructor(private http: HttpClient) { }


  getListaPropietarioBasica():Observable<PropietarioBasicResponse[]>{
    let url=`${environment.apiBaseUrl}/propietario/lista/`
    return this.http.get<PropietarioBasicResponse[]>(url);
  } 

  getPropietariosPaginados(pagina:number):Observable<PaginaCompletaPropietarioResponse>{
    let url= environment.apiBaseUrl;
    return this.http.get<PaginaCompletaPropietarioResponse>(`${url}${URL_PROPIETARIO}?page=${pagina}`)
  }

  getPropietarioDetallado(id:number):Observable<DetailPropietarioResponse>{
    let url=environment.apiBaseUrl;
    return this.http.get<DetailPropietarioResponse>("http://localhost:8080/propietario/2");
  }
  
  deletePropietario(id:number):Observable<DetailPropietarioResponse>{
    let url=environment.apiBaseUrl;
    return this.http.delete<DetailPropietarioResponse>(`${url}${URL_PROPIETARIO}${id}`);
  }
}
