import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { FirebaseAuthService } from '../../../services/firebase-auth.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  constructor(public snackBar: MatSnackBar, public authService: FirebaseAuthService, public location: Location) { }
  loading = false;
  email: string;
  password: string;
  confirmPassword: string;
  errorMessage: string;

  ngOnInit() {
  }


  register() {
    this.errorMessage = null;
    this.loading = true;
    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Passwords do not match.';
      this.loading = false;
      return;
    }
    this.authService.register(this.email, this.password).then(data => {
      this.openSnackbar('Successfully registered in.');
      this.loading = false;
      this.location.back();
    }).catch(error => {
      this.errorMessage = error.message;
      console.log(JSON.stringify(error));
      this.loading = false;
    });
  }

  openSnackbar(msg: string) {
    this.snackBar.open(msg, 'Dismiss', {
      duration: 2000,
    });
  }
}
