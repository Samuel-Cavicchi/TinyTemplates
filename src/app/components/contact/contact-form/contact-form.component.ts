import { Component, OnInit } from '@angular/core';
import { FirebaseAuthService } from '../../../services/firebase-auth.service';
declare var require: any;

// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database.
//const admin = require('firebase-admin');
//admin.initializeApp(functions.config().firebase);

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  constructor(public auth: FirebaseAuthService) { }

  ngOnInit() {
  }

  // sendMessage() {
  //   if(this.auth.user) {
  //     const user = this.auth.user;
  //     console.log('A new user signed in for the first time.');
  //     const fullName = user.displayName || 'Anonymous';
    
  //     // Saves the new welcome message into the database
  //     // which then displays it in the FriendlyChat clients.
  //     return admin.database().ref('messages').push({
  //       name: 'Firebase Bot',
  //       photoUrl: '/assets/images/firebase-logo.png', // Firebase logo
  //       text: `${fullName} signed in for the first time! Welcome!`
  //     });
  //   }
  // }

}
