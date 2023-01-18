import { Injectable } from '@angular/core';
import { HttpClient as HttpClient } from '@angular/common/http';
import { IProducto } from '../entities/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductHttpServiceService {

  readonly apiurl = "https://api.escuelajs.co/api/v1/products";

  constructor( private httpClient: HttpClient ) {};
// GET 
  getAll() {
    return this.httpClient.get(this.apiurl);
  };
// GET
  getOne(id: number) {
    return this.httpClient.get(`${this.apiurl}/${id}`);
  };
// CREATE
  storeProduct(product: object) {
    return this.httpClient.post(`${this.apiurl}`, product);
  }  

// PUT
  update(id: number, product: object) {
    return this.httpClient.put(`${this.apiurl}/${id}`, product);
  }  

// DELETE
  destroid(id: number) {
    return this.httpClient.delete(`${this.apiurl}/${id}`);
  }
}
