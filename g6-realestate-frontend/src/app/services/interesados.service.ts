import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AllInteresados } from '../interfaces/all-interesados-response.interface';
import { DetailInteresado } from '../interfaces/detail-interesado-response.interface';
import { GetInteresadosListaResponse } from '../interfaces/get-interesados-lista.interface';

const DEFAULT_HEADERS = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

const interesadosBaseUrl = `${environment.apiBaseUrl}/interesado`;
@Injectable({
  providedIn: 'root'
})
export class InteresadosService {

  constructor(private http: HttpClient) { }


getInteresados(): Observable<AllInteresados[]> {
  let url = `${interesadosBaseUrl}/count`;
  return this.http.get<AllInteresados[]>(url);
}

  getInteresadosLista(): Observable<GetInteresadosListaResponse[]> {
    let url = `${interesadosBaseUrl}/`
    return this.http.get<GetInteresadosListaResponse[]>(url);
  }

  getInteresadoDetail(id: number): Observable<DetailInteresado> {
    let url = `${interesadosBaseUrl}/${id}`;
    return this.http.get<DetailInteresado>(url);
  }

}
