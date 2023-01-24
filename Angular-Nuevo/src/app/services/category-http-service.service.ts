import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ICategories } from '../entities/categories.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryHttpServiceService {

  readonly apiUrl = "https://api.escuelajs.co/api/v1/categories";

  constructor( private httpClient: HttpClient ) {};

  // GET ALL  
  getAll(): Observable<ICategories> {
    return this.httpClient.get<ICategories>(this.apiUrl);
  }; 

  // GET
  getOne(id: ICategories['id']): Observable<ICategories> {
    return this.httpClient.get<ICategories>(`${this.apiUrl}/${id}`);
  };

  // CREATE
  store(product: object): Observable<ICategories> {
    return this.httpClient.post<ICategories>(this.apiUrl, product);
  };

  // PUT
  update(id: ICategories['id'], product: ICategories): Observable<ICategories> {
    return this.httpClient.put<ICategories>(`${this.apiUrl}/${id}`, product);
  };

  // DELETE
  destroid(id: ICategories['id']): Observable<any> {
    return this.httpClient.delete<any>(`${this.apiUrl}/${id}`).pipe(map ((response: {rta:boolean}) => {
      return response.rta;
    }));
  };
}
