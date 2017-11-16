import {Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './services/guards/auth.guard';
import { ProductsComponent } from './products/products.component';
import { ProdComponent } from './prod/prod.component';

const appRoutes: Routes = [
	{ path: 'home', component: HomeComponent }, //AuthGuard-ca sa vezi daca esti loghinat sau nu
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'gallery', component: GalleryComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'products/prod' , component:ProdComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: 'home' }
];

export const routing = RouterModule.forRoot(appRoutes);