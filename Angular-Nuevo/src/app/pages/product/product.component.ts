//Trabajar con los metodos http de la libreria http client
import { Component, OnInit } from '@angular/core';
import { HttpClient as HttpClient } from '@angular/common/http';
import { IProducto } from 'src/app/entities/product.model';

// get     //
// post    //
// put     //
// delete  //
// 😳😳   //

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  constructor( private httpClient: HttpClient ) {};
// GET 
  getProducts(): void {
    const response = this.httpClient.get("https://api.escuelajs.co/api/v1/products/").subscribe(response => {
      console.log(response);
    });
  };
// GET
  getProduct(): void {
    const url = "https://api.escuelajs.co/api/v1/products/150";
    const response = this.httpClient.get(url).subscribe(response => {
      console.log((response as any)?.images);
    });
  };
// CREATE
  createProduct(): void {

    const data: IProducto = {
      title: "Sebastian Ortiz",
      price: 500,
      description: "hola",
      images: ['https://educacion30.b-cdn.net/wp-content/uploads/2019/02/girasoles-978x652.jpg'],
      categoryId: 5,

      category: {
        titulo: "string",
        descripcion: "asd",
        id: 5
      }
    };

    const url = "https://api.escuelajs.co/api/v1/products";
    this.httpClient.post(url, data).subscribe(response => {
      console.log(response)
    });
  }  

// PUT
  updateProduct(): void {
    const data: IProducto = {
      title: "Gato con botas",
      price: 500,
      description: "hola",
      images: ['https://educacion30.b-cdn.net/wp-content/uploads/2019/02/girasoles-978x652.jpg'],
      categoryId: 5,

      category: {
        titulo: "string",
        descripcion: "asd",
        id: 5
      }
    };

    const url = "https://api.escuelajs.co/api/v1/products/218";
    this.httpClient.put(url, data).subscribe(response => {
      console.log(response)
    });
  }  

// DELETE
  deleteProduct(): void {
    const url = "https://api.escuelajs.co/api/v1/products/217";
    this.httpClient.delete(url).subscribe(response => {
      console.log(response)
    });
  }

  ngOnInit(): void {
    // this.getProducts();
    // this.getProduct();
    this.createProduct();
    // this.updateProduct();
    // this.deleteProduct();
  };  
};