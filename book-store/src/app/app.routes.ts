import { Routes } from '@angular/router';
import {Login} from './pages/auth/login/login';
import { Register } from './pages/auth/register/register';
import { Home } from './pages/home/home';

import { AdminLayout } from './Layouts/admin-layout/admin-layout';
import { CustomerLayout } from './Layouts/customer-layout/customer-layout';


import { NotFound } from './pages/not-found/not-found';
import { BookDetails } from './pages/book-details/book-details';
import { Wishlist } from './pages/wishlist/wishlist';
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
        component: Wishlist
      }

      // ضيفي باقي الـ routes هنا لما الفريق يخلصها
  
      // { path: 'books', component: Books },
   
      // { path: 'cart', component: Cart },
      // { path: 'checkout', component: Checkout },
    ]
  },
  {
    path: 'admin',
    component: AdminLayout,
    children: [
      // { path: 'dashboard', component: Dashboard },
      { path: 'add-book', component: AddBook },
       {
      path: 'edit-book/:id',
      component: UpdateBook
    },

      { path: 'list-books', component: ListBook },
      // { path: 'sales-analytics', component: SalesAnalytics },
    ]
  },



  // MUST be last:
  { path: '**', component: NotFound }
];
