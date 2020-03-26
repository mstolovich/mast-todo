import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  message: string;

  constructor(public authService: AuthService, public router: Router) { }

  setMessage() {
     this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }

  login() {
    this.message = 'Trying to log in ...';
    this.authService.login().subscribe(() => {
      this.setMessage();
      if (this.authService.isLoggedIn) {
        let redirectUrl = '/user';
        // let navigationExtras: NavigationExtras = {
        //   queryParamsHandling: 'preserve',
        //   preserveFragment: true
        // }

        this.router.navigate([redirectUrl], 
          //navigationExtras
          )
      }
    })
  }
    
  logout() {
    this.authService.logOut();
    this.setMessage();
  }

  ngOnInit(): void {
    this.setMessage()
  }

}
