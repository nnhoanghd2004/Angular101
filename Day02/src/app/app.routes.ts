import { Routes } from '@angular/router';
import { SignInFormComponent } from './components/sign-in-form/sign-in-form.component';
import { SignUpFormComponent } from './components/sign-up-form/sign-up-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductsComponent } from './components/products/products.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: 'SignUp', component: SignUpFormComponent },
  { path: 'SignIn', component: SignInFormComponent },
  { path: 'Home', component: ProductsComponent },
  // { path: 'Products', component: ProductsComponent },
];
