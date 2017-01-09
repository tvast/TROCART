// login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from './../user.service';

@Component({
  selector: 'login',
  templateUrl: `app/login/login.component.html`,
})
export class LoginComponent {
  constructor(private userService: UserService, private router: Router) {}

  onSubmit(email, password) {
    this.userService.login(email, password).subscribe((result) => {
      if (result) {
        this.router.navigate(['']);
        console.log("salut")
      }
    });
  }
}
