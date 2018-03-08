import { Component, OnInit } from '@angular/core';
import { RouterLinkActive, RouterLink } from '@angular/router';
import { FirebaseAuthService } from '../../services/firebase-auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public authService: FirebaseAuthService) { }
  ngOnInit() {

  }

}
