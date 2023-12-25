import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { LoginService } from '../service/login.service';
import { Observable, map, take } from 'rxjs';

export const LoginGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
):
  | boolean
  | UrlTree
  | Observable<boolean | UrlTree>
  | Promise<boolean | UrlTree> => {
  const router = inject(Router);
  const loginService = inject(LoginService);

  return loginService.currentUser$.pipe(
    take(1),
    map((user) => {
      const isValidUser = !!user;
      if (!isValidUser) {
        return router.createUrlTree(['/login']);
      }
      return true;
    })
  );
};
