import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { AppComponent } from '../app.component';

const routes: Routes = [
  //rutas protegidas
  {
    path: '',
    component: AppComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'product' },
      { path: 'product', component: ProductComponent },
      { path: 'pages', component: PagesComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'category', component: CategoryComponent },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [],
})
export class PagesRoutingModule {}
/* // MICHAEL SEBASTIAN ORTIZ JARRIN */
