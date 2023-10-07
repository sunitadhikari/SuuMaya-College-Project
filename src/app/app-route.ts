import { AboutComponent } from './about/about.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { ProductsComponent } from './products/products.component';
import { authGuard } from './auth.guard';
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'header',
    component: HeaderComponent,
  },
  {
    path: 'footer',
    component: FooterComponent,
  },

  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'products/detail/:id',
    component: ProductDetailComponent,
  },
  {
    path: 'products/:name',
    component: ProductDetailComponent,
  },
  {
    path: 'dashboard',
    canActivate: [authGuard],
    canLoad: [authGuard],
    loadChildren: () =>
      import('./dashboard/dashboard.route').then((r) => r.routes),
  },
];
