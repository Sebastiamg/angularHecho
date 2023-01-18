//Trabajar con los metodos http de la libreria http client
import { Component, OnInit } from '@angular/core';
import { IProducto } from 'src/app/entities/product.model';
import { ProductHttpServiceService } from 'src/app/services/product-http-service.service';

// get
// post
// put
// delete
                                                // 😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳//                                   

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  constructor(private ProductHttpServiceService: ProductHttpServiceService ) {};

  getProducts() {
    const response = this.ProductHttpServiceService.getAll().subscribe(res => console.log(res));  
  }

  getProduct() {
    const response = this.ProductHttpServiceService.getOne(50).subscribe(res => console.log(res));
  }

  createProduct() {
    const data = {
      title:"Sebastián Ortiz",
      price:20,
      description:"hola bb",
      images:["https://sdfsdgsdhasjh"],
      categoryId:1
    }
    this.ProductHttpServiceService.storeProduct(data).subscribe(res => console.log(res));
    console.log(data)
  }
  
  updateProduct() {
    const data = {
      title:"Michael Ortiz :p",
      price:25,
      description:"hola soy desciption",
    }
    this.ProductHttpServiceService.update(60, data).subscribe(res => console.log(res))
  }

  deleteProduct() {
    this.ProductHttpServiceService.destroid(61).subscribe(res => console.log(res))
  }

  ngOnInit(): void {
    this.getProducts()
    // this.getProduct()
    // this.createProduct()
    // this.updateProduct()
    // this.deleteProduct()
  };  
};