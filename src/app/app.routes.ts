import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListProductComponent } from './pages/list-product/list-product.component';
import { DetailProductComponent } from './pages/detail-product/detail-product.component';
import { ProductCartComponent } from './components/product-cart/product-cart.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },

  {
    path: 'products',
    component: ListProductComponent,
  },

  {
    path: 'product/:id',
    component: DetailProductComponent,
  },
  {
    path: 'cart',
    component: ProductCartComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  { path: 'sign-up', component: SignUpComponent },
];
