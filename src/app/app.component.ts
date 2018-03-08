import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SourcesComponent } from './components/sources/sources.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TinyTemplates';
}
