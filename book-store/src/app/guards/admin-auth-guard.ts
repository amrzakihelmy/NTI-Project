import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const adminGuard: CanActivateFn = () => {

  const router = inject(Router);

  const user = JSON.parse(localStorage.getItem('currentUser') || 'null');

  if (user && user.role === 'admin') {
    return true;
  }

  return router.createUrlTree(['/login']);
};