import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RouterModule, Routes, RouterLinkActive, RouterLink } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { FirebaseAuthService } from './services/firebase-auth.service';

// Material
import { MaterialModule } from './modules/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Firebase
import { AngularFireModule } from 'angularfire2';
// import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { environment } from '../environments/environment';
import { RegisterComponent } from './components/register/register.component';
import { RegisterFormComponent } from './components/register/register-form/register-form.component';
import { EditorComponent } from './components/editor/editor.component';
import { ThemesComponent } from './components/themes/themes.component';
import { MaterialThemeComponent } from './components/themes/material-theme/material-theme.component';
import { FirebaseDatabaseService } from './services/firebase-database.service';
import { CleanThemeComponent } from './components/themes/clean-theme/clean-theme.component';
import { LoginFormComponent } from './components/login/login-form/login-form.component';
import { SourcesComponent } from './components/sources/sources.component';
import { ContactFormComponent } from './components/contact/contact-form/contact-form.component';
import { ThemeService } from './services/theme.service';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Home' },
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full'
  },
  // {
  //   path: 'logout',
  // },
  {
    path: 'register',
    component: RegisterComponent,
    pathMatch: 'full',
  },
  {
    path: 'editor',
    component: EditorComponent,
    pathMatch: 'full',
  },
  {
    path: 'themes',
    component: ThemesComponent,
    pathMatch: 'full',
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/home'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    RegisterFormComponent,
    EditorComponent,
    ThemesComponent,
    MaterialThemeComponent,
    CleanThemeComponent,
    LoginFormComponent,
    SourcesComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    MaterialModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase), // imports firebase/app needed for everything
    // AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  providers: [FirebaseAuthService, FirebaseDatabaseService, ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
