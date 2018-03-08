import { Component, OnInit } from '@angular/core';
import { FirebaseAuthService } from '../../services/firebase-auth.service';
import { RegisterFormComponent } from '../register/register-form/register-form.component';
import { FirebaseDatabaseService } from '../../services/firebase-database.service';
import { ResumeFormatModel } from '../../models/resume-format.model';
import { SourcesComponent } from '../sources/sources.component';
import { ContactFormComponent } from '../contact/contact-form/contact-form.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public authService: FirebaseAuthService) {
  }
  ngOnInit() {
  }

}
