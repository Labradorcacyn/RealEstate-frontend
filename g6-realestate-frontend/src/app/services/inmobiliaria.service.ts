import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { InmobiliariaBasicResponse } from '../interfaces/propietariosListaBasica.interface';
import { Inmobiliaria, InmobiliariaResponse } from '../interfaces/inmobiliarias.response.interface';
import { InmobiliariaDetalle } from '../interfaces/inmobiliaria-detalle.interface';

const inmobiliariaBaseUrl = `${environment.apiBaseUrl}/inmobiliaria`;

const DEFAULT_HEADERS = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class InmobiliariaService {

  constructor(private http: HttpClient) { }

  getInmobiliarias(pag: number): Observable<InmobiliariaResponse> {
    let url = `${inmobiliariaBaseUrl}/?page=${pag}`;
    return this.http.get<InmobiliariaResponse>(url);
  }

  getInmobiliariaDetallada(id:number):Observable<InmobiliariaDetalle>{
    let url=environment.apiBaseUrl;
    return this.http.get<InmobiliariaDetalle>(`${inmobiliariaBaseUrl}/${id}`);
  }

  getInmobiliariaShort(): Observable<InmobiliariaBasicResponse[]> {
    let url = `${inmobiliariaBaseUrl}/all`;
    return this.http.get<InmobiliariaBasicResponse[]>(url);
  }

  postInmobiliaria(inmobiliaria:Inmobiliaria):Observable<Inmobiliaria>{
    return this.http.post<Inmobiliaria>("http://localhost:8080/inmobiliaria/",inmobiliaria, DEFAULT_HEADERS)
  }

  deleteInmobiliaria(id:number){
    let url=`http://localhost:8080/inmobiliaria/${id}`;
    return this.http.delete<any>(url);
  }
}
