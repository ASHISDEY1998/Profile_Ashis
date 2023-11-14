import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { GlobalServiceService } from './services/global-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivateChild {
  constructor(private globalService: GlobalServiceService, private router: Router) {

  }
  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.globalService.isAuthenticated()
      .subscribe(
        (authenticated: boolean) => {
          authenticated ? true : this.router.navigate(['admin'])
        }
      )
  }

}
