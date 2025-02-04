import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

// eslint-disable-next-line prettier/prettier
export const routes: Routes = [
    { path: '', redirectTo: '/login' },
    {
        path: 'login/', component: LoginComponent
    },
    {
    path: 'register/',
    component: RegisterComponent,
    }
];
