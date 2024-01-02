import { Routes } from '@angular/router';
import { SignInFormComponent } from './components/sign-in-form/sign-in-form.component';
import { SignUpFormComponent } from './components/sign-up-form/sign-up-form.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
export const routes: Routes = [
  { path: 'SignUp', component: SignUpFormComponent },
  { path: 'SignIn', component: SignInFormComponent },
  { path: 'Home', component: ProductsComponent },
  { path: 'Product/:id', component: ProductDetailComponent },
];
