import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

const wrongEmail = 'auth/invalid-email';
const wrongPassword = 'auth/wrong-password';
const tooManyRequestsCode = 'auth/too-many-requests';
const userNotFound = 'auth/user-not-found';

const emailInUse = 'auth/email-already-in-use';
const invalidEmailFormat = 'auth/invalid-email';
const operationNotAllowed = 'auth/operation-not-allowed';
const weakPassword = 'auth/weak-password';

@Injectable()
export class FirebaseAuthService {

  public user: firebase.User;

  constructor(public afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe((user) => {
      this.user = user;
    });
  }

  public loginAnonymously() {
    return this.afAuth.auth.signInAnonymously();
  }

  public login(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, password).then(() => {
        resolve();

      }).catch(error => {
        if (error.code === wrongEmail) {
          error.message = 'Invalid Email.';
        } else if (error.code === wrongPassword) {
          error.message = 'Incorrect password.';
        } else if (error.code === tooManyRequestsCode) {
          error.message = 'Too many attempts. Please try again later.';
        } else if (error.code === userNotFound) {
          error.message = 'Email entered is incorrect.';
        }
        reject(error);
      });
    });
  }

  public register(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(() => {
        resolve();
      }).catch(error => {
        if (error.code === emailInUse) {
          error.message = 'Email is currently in use.';
        } else if (error.code === invalidEmailFormat) {
          error.message = 'Email is not valid.';
        } else if (error.code === operationNotAllowed) {
          error.message = 'Access Denied.';
        } else if (error.code === weakPassword) {
          error.message = 'Please increase password strength.';
        }
        reject(error);
      });
    });
  }

  public logout() {
    return this.afAuth.auth.signOut();
  }
}
