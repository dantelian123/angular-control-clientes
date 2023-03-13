import { ConfiguracionServicio } from './../../servicios/configuracion.service';
import { LoginService } from '../../servicios/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styleUrls: ['./cabecero.component.css']
})
export class CabeceroComponent implements OnInit{
  isLoggedIn:boolean;
  loggedInUser:string;
    permitirRegistro:boolean;
  constructor(private logginService:LoginService,
    private router:Router,
    private configuracionServicio:ConfiguracionServicio){}
  ngOnInit(): void {
    this.logginService.getAuth().subscribe(auth=>{
      if(auth){
        this.isLoggedIn=true;
        this.loggedInUser=auth.email;
      }else{
        this.isLoggedIn=false;
      }
    });
    this.configuracionServicio.getConfiguracion()
    .subscribe(configuracion=>{
      this.permitirRegistro=configuracion.permitirRegistro;
    })
  }
logOut(){
  this.logginService.logout();
  this.isLoggedIn = false;
  this.router.navigate(['/login']);
}

}
