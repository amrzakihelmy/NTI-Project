import { Routes } from '@angular/router';
import {Login} from '../pages/auth/login/login';
import { Register } from '../pages/auth/register/register';
import { Home } from '../pages/home/home';
import { Admin } from '../pages/admin/admin';
import { AdminLayout } from '../Layouts/admin-layout/admin-layout';
import { CustomerLayout } from '../Layouts/customer-layout/customer-layout';

export const routes: Routes = [
    {path:"",redirectTo:"home",pathMatch:"full"},
    {path:"home",component:Home},
    {path:"login",component:Login},
    {path:"sign-up",component:Register},
    {path:"admin",component:Admin},


  {
    path: '',
    component: CustomerLayout,
    children: [
      // { path: '', component: Home },
      // { path: 'books', component: Books },
      // { path: 'books/:id', component: BookDetails },
      // { path: 'login', component: Login },
      // { path: 'register', component: Register },
      // { path: 'wishlist', component: Wishlist },
      // { path: 'cart', component: Cart },
      // { path: 'checkout', component: Checkout },
    ]
  },
  {
    path: 'admin',
    component: AdminLayout,
    // canActivate: [adminGuard],
    children: [
      // { path: 'dashboard', component: Dashboard },
      // { path: 'add-book', component: AddBook },
      // { path: 'manage-books', component: ManageBooks },
      // { path: 'sales-analytics', component: SalesAnalytics },
      // { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ]
  },
  // { path: '**', component: NotFound }
];
