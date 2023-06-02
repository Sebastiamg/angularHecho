/* // MICHAEL SEBASTIAN ORTIZ JARRIN */

//Trabajar con los metodos http de la libreria http client
import { Component, OnInit } from '@angular/core';
import { ICategories } from 'src/app/entities/categories.model';
import { IProducto } from 'src/app/entities/product.model';
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
  styleUrls: [],
})
export class ProductComponent implements OnInit {
  products: any;
  selectiveProduct: Pick<IProducto, 'title' | 'price' | 'description'> = {
    title: '',
    price: 0,
    description: '',
  };

  private productID = 0;
  dataBody = {
    title: '',
    price: 0,
    description: '',
  };

  constructor(
    private ProductHttpServiceService: ProductHttpServiceService,
    private CategoryHttpServices: CategoryHttpServiceService
  ) {}

  getProducts() {
    const response = this.ProductHttpServiceService.getAll().subscribe(
      (res) => {
        this.products = res;
      }
    );
    return response;
  } //michael ortiz

  getProduct() {
    const response = this.ProductHttpServiceService.getOne(50).subscribe(
      (res) => console.log(res)
    );
  }

  createProduct() {
    this.ProductHttpServiceService.getOne(50).subscribe((res) => {
      console.log(res)
      const data = {
        ...res,
        categoryId: 2,
        title: this.dataBody.title,
        price: this.dataBody.price,
        description: this.dataBody.description,
      } as IProducto;

      this.ProductHttpServiceService.storeProduct(data).subscribe((res) =>
        this.getProducts()
      );
    });
  } //Michael Ortiz

  updateProduct() {
    const data = {
      ...this.selectiveProduct,
      ...this.dataBody,
    };

    this.ProductHttpServiceService.update(this.productID, data).subscribe(
      (res) => this.getProducts()
    );
  } //Michael Ortiz

  editAll(limit: number) {
    this.ProductHttpServiceService.allput();
  }

  deleteProduct(id: IProducto['id']) {
    this.ProductHttpServiceService.destroid(id).subscribe((res) => {
      this.products = this.products.filter((product: any) => product.id != id);
    });
  }

  editProduct(product: IProducto) {
    this.selectiveProduct = product;
    this.productID = product.id;
  }

  // ------------------------------------ Categories ------------------------------------ //

  getCategories() {
    const response = this.CategoryHttpServices.getAll().subscribe((res) =>
      console.log(res)
    );
  }

  getcategory() {
    const response = this.CategoryHttpServices.getOne(4).subscribe((res) =>
      console.log(res)
    );
  }

  createCategory() {
    const data: ICategories = {
      name: 'Categoria de Sebastian Ortiz :p',
      image: 'https://api.lorem.space/image/watch?w=640&h=480&r=3123',
    };
    this.CategoryHttpServices.store(data).subscribe((res) => console.log(res));
    console.log(data);
  }

  updateCategory() {
    const data: ICategories = {
      name: "Ortiz Sebastian's Category >:,(",
      image: 'https://api.lorem.space/image/watch?w=640&h=480&r=3123',
    };
    this.CategoryHttpServices.update(11, data).subscribe((res) =>
      console.log(res)
    );
  }

  deleteCategory() {
    this.CategoryHttpServices.destroid(14).subscribe((res) => console.log(res));
  }

  ngOnInit(): void {
    this.getProducts();
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
  }
}
