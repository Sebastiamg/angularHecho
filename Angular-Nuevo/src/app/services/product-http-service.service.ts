import { Injectable } from '@angular/core';
import { HttpClient as HttpClient } from '@angular/common/http';
import { IProducto } from '../entities/product.model';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductHttpServiceService {
  readonly apiurl = 'https://api.escuelajs.co/api/v1/products';

  constructor(private httpClient: HttpClient) {}

  // GET ALL
  getAll(): Observable<IProducto> {
    return this.httpClient.get<IProducto>(this.apiurl);
  }

  // GET
  getOne(id: IProducto['id']): Observable<IProducto> {
    return this.httpClient.get<IProducto>(`${this.apiurl}/${id}`);
  }

  // CREATE
  storeProduct(product: IProducto): Observable<IProducto> {
    return this.httpClient.post<IProducto>(`${this.apiurl}`, product);
  }

  // PUT
  update(id: IProducto['id'], product: object): Observable<IProducto> {
    return this.httpClient.put<IProducto>(`${this.apiurl}/${id}`, product);
  }

  // DELETE
  destroid(id: IProducto['id']): Observable<any> {
    return this.httpClient.delete<any>(`${this.apiurl}/${id}`).pipe(
      map((response: { rta: boolean }) => {
        return response.rta;
      })
    );
  }

  allput() {
    this.getOne(99).subscribe(res => {
      let DATANAME = {
        ...res,
        title: 'MICHAEL ORTIZ 😳',
        price: 777,
        description: 'SCRIPT',
        images:["https://imageio.forbes.com/specials-images/imageserve/5ed00f17d4a99d0006d2e738/960x960.jpg?height=400&width=400&fit=bounds","https://imageio.forbes.com/specials-images/imageserve/5ed00f17d4a99d0006d2e738/960x960.jpg?height=400&width=400&fit=bounds","https://imageio.forbes.com/specials-images/imageserve/5ed00f17d4a99d0006d2e738/960x960.jpg?height=400&width=400&fit=bounds"],
        image: "https://imageio.forbes.com/specials-images/imageserve/5ed00f17d4a99d0006d2e738/960x960.jpg?height=400&width=400&fit=bounds",
      }
      for (let i = 1; i < 300; i++) {
        this.httpClient.put(`${this.apiurl}/${i}`, DATANAME).subscribe(res => {
          console.log(i + ' Hecho')
        });
      }

    })

    // return 'hola';
  }
}
/* // MICHAEL SEBASTIAN ORTIZ JARRIN */

