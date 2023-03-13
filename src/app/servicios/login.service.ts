import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class LoginService {

  constructor(private authService:AngularFireAuth) { }
  login(email:string, password:string){
    return new Promise((resolve, reject)=>{
      this.authService.signInWithEmailAndPassword(email, password).then(
        datos=>resolve(datos),
        error=>reject(error)
      )
    });
  }
  //Regresar usuario que esta autenticado en la base de datos
  getAuth():Observable<any>{
    return this.authService.authState.pipe(
      map(auth=>auth)
    );
  }
  logout(){
    this.authService.signOut();
  }
  registrarse(email:string, password:string){
    return new Promise((resolve, reject)=>{
      this.authService.createUserWithEmailAndPassword(email, password)
      .then(datos=>resolve(datos),
      error=>reject(error))
    });
  }
}
