//Trabajar con los metodos http de la libreria http client
import { Component, OnInit } from '@angular/core';
import { ICategories } from 'src/app/entities/categories.model';
import { CategoryHttpServiceService } from 'src/app/services/category-http-service.service';
import { ProductHttpServiceService } from 'src/app/services/product-http-service.service';

// get
// post
// put
// delete
                //-//- 😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳 -//-//                                   
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  constructor(
    private ProductHttpServiceService: ProductHttpServiceService,
    private CategoryHttpServices: CategoryHttpServiceService
    ) {};

  getProducts() {
    const response = this.ProductHttpServiceService.getAll().subscribe(res => console.log(res));  
  };

  getProduct() {
    const response = this.ProductHttpServiceService.getOne(50).subscribe(res => console.log(res));
  };

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
  };
  
  updateProduct() {
    const data = {
      title:"Michael Ortiz :p",
      price:25,
      description:"hola soy desciption",
    }
    this.ProductHttpServiceService.update(60, data).subscribe(res => console.log(res))
  };

  deleteProduct() {
    this.ProductHttpServiceService.destroid(61).subscribe(res => console.log(res))
  };


  // ------------------------------------ Categories ------------------------------------ //

  getCategories() {
    const response = this.CategoryHttpServices.getAll().subscribe(res => console.log(res));  
  };
  
  getcategory() {
    const response = this.CategoryHttpServices.getOne(4).subscribe(res => console.log(res));
  };

  createCategory() {
    const data: ICategories = {
      name: "Categoria de Sebastian Ortiz :p",
      image: "https://api.lorem.space/image/watch?w=640&h=480&r=3123"
    }
    this.CategoryHttpServices.store(data).subscribe(res => console.log(res));
    console.log(data)
  };

  updateCategory() {
    const data: ICategories = {
      name: "Ortiz Sebastian's Category >:,(",
      image: "https://api.lorem.space/image/watch?w=640&h=480&r=3123"
    }
    this.CategoryHttpServices.update(11, data).subscribe(res => console.log(res))
  };

  deleteCategory() {
    this.CategoryHttpServices.destroid(14).subscribe(res => console.log(res))
  };

  ngOnInit(): void {
    // this.getProducts();
    // this.getProduct();
    // this.createProduct();
    // this.updateProduct();
    // this.deleteProduct();

    // --------||--------|| -CATEGORY- ||--------||-------- //

    // this.getCategories();
    // this.getcategory();
    // this.createCategory();
    // this.updateCategory();
    // this.deleteCategory();
  };  
};