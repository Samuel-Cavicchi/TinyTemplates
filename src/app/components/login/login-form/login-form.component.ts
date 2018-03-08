import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { FirebaseAuthService } from '../../../services/firebase-auth.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})

export class LoginFormComponent implements OnInit {

  constructor(public snackBar: MatSnackBar, public authService: FirebaseAuthService, public location: Location) { }

  loading = false;
  email: string;
  password: string;
  errorMessage: string;
  ngOnInit() {
  }

  submit() {
    this.errorMessage = null;
    this.loading = true;
    this.authService.login(this.email, this.password).then(data => {
      this.openSnackbar('Successfully logged in.');
      this.loading = false;
      this.location.back();
    }).catch(error => {
      this.errorMessage = error.message;
      console.log(error);
      this.loading = false;
    });
  }

  logout() {
    this.authService.logout();
  }

  openSnackbar(msg: string) {
    this.snackBar.open(msg, 'Dismiss', {
      duration: 2000,
    });
  }
}
