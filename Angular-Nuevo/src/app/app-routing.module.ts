import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppComponent } from './app.component';
import { LoginGardGuard } from './auth/login/login-gard.guard';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./auth/auth-routing.module').then(
            (module) => module.AuthRoutingModule
          ),
      },
      {
        path: 'pag',
        loadChildren: () =>
          import('./pages/pages-routing.module').then(
            (module) => module.PagesRoutingModule
          ),
        canLoad: [LoginGardGuard],
      },

      { path: '**', component: NotFoundComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
/* // MICHAEL SEBASTIAN ORTIZ JARRIN */
