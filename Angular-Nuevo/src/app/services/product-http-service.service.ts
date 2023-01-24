import { Injectable } from '@angular/core';
import { HttpClient as HttpClient } from '@angular/common/http';
import { IProducto } from '../entities/product.model';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductHttpServiceService {

  readonly apiurl = "https://api.escuelajs.co/api/v1/products";

  constructor( private httpClient: HttpClient ) {};

// GET ALL  
  getAll(): Observable<IProducto> {
    return this.httpClient.get<IProducto>(this.apiurl);
  };  

// GET
  getOne(id: IProducto['id']): Observable<IProducto> {
    return this.httpClient.get<IProducto>(`${this.apiurl}/${id}`);
  };

// CREATE
  storeProduct(product: object): Observable<IProducto> {
    return this.httpClient.post<IProducto>(`${this.apiurl}`, product);
  }

// PUT
  update(id: IProducto['id'], product: object): Observable<IProducto> {
    return this.httpClient.put<IProducto>(`${this.apiurl}/${id}`, product);
  }

// DELETE
  destroid(id: IProducto['id']): Observable<any> {
    return this.httpClient.delete<any>(`${this.apiurl}/${id}`).pipe(map ((response: {rta:boolean}) => {
      return response.rta
    })
    );
  }
}
