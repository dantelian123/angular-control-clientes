import { FlashMessagesService } from 'angular2-flash-messages';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../servicios/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {
    this.loginService.getAuth().subscribe(auth =>{
      if(auth){
        this.router.navigate(['/']);
      }
    })
  }
  constructor(private router: Router, private flashMessagges: FlashMessagesService,
    private loginService: LoginService) {
  }
  email: string;
  password: string;

  login() {
    this.loginService.login(this.email, this.password).then(
      resolve => {
        this.router.navigate(['/']);
      },
    ).catch(error => {
      this.flashMessagges.show(error.message,
        { cssClass: 'alert-danger', timeout: 2000 })
    })
  }
}
