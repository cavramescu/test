import {Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './services/guards/auth.guard';

const appRoutes: Routes = [
	{ path: '', component: HomeComponent, canActivate: [AuthGuard] }, //AuthGuard-ca sa vezi daca esti loghinat sau nu
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);