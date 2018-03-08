import { Component, OnInit } from '@angular/core';
import { RegisterFormComponent } from './register-form/register-form.component';
import { FirebaseAuthService } from '../../services/firebase-auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(public authService: FirebaseAuthService) { }



  ngOnInit() {
  }


}
