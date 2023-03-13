import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { map } from "rxjs/operators"
@Injectable()
export class AuthGuard implements CanActivate{
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<boolean>{
    return this.afAuth.authState.pipe(
      map( auth=>{
        if(!auth){
          this.router.navigate(['/login']);
          return false;
        }else{
          return true;
        }
      })
    )
  }
  constructor(private router:Router,
              private afAuth:AngularFireAuth){}
}
