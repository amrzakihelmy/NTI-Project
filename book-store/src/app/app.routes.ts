import { Routes } from '@angular/router';
import {Login} from './pages/auth/login/login';
import { Register } from './pages/auth/register/register';
import { Home } from './pages/home/home';

import { AdminLayout } from './Layouts/admin-layout/admin-layout';
import { CustomerLayout } from './Layouts/customer-layout/customer-layout';
import { adminGuard } from '../app/guards/admin-auth-guard';

import { NotFound } from './pages/not-found/not-found';
import { BookDetails } from './pages/book-details/book-details';
import { AddBook } from './pages/Admin/add-book/add-book';
import { ListBook } from './pages/Admin/list-book/list-book';
import { UpdateBook } from './pages/Admin/update-book/update-book';
export const routes: Routes = [
    {path:"",redirectTo:"home",pathMatch:"full"},
    {path:"home",component:Home},
    {path:"login",component:Login},
    {path:"sign-up",component:Register},
   


  {
    path: '',
    component: CustomerLayout,
    children: [
      {
        path: 'books/:id',
        component: BookDetails
      },
      {
        path: 'wishlist',
        loadComponent: () =>
          import('./pages/wishlist/wishlist').then(m => m.Wishlist)
      },
      {
        path: 'cart',
        loadComponent: () =>
          import('./pages/cart/cart').then(m => m.Cart)
      }

    ]
  },
  {
    path: 'admin',
    component: AdminLayout,
    canActivate: [adminGuard],
    children: [
      { path: 'add-book', component: AddBook },
       {
      path: 'edit-book/:id',
      component: UpdateBook
    },

      { path: 'list-books', component: ListBook },
    ]
  },



 
  { path: '**', component: NotFound }
];
