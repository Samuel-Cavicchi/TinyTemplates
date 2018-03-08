import { Component, OnInit } from '@angular/core';
import { RouterLinkActive, RouterLink, Router } from '@angular/router';
import { FirebaseAuthService } from '../../services/firebase-auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public authService: FirebaseAuthService, private router: Router) { }
  ngOnInit() {

  }

  navigateTo(str) {
    this.router.navigateByUrl(str);
  }
}
