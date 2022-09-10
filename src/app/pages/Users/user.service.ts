import { Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from '@angular/fire/auth';
import { Router } from '@angular/router';
import { LoginInterface } from '../login-page/login-interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private auth: Auth,

    private router: Router
  ) {}

  signupWithEmailAndPassword(user: SignUpInterface, cb: Function) {
    const { email, password } = user;
    createUserWithEmailAndPassword(this.auth, email, password)
      .then((credentials) => {
        console.log(credentials);

        cb(credentials);
        console.log('user signup succefuly');
      })
      .catch(() => cb(null));
  }

  logOut() {
    signOut(this.auth)
      .then(() => {
        console.log('user logged out');
      })
      .catch((error) => console.log(error));
  }

  loginWithEmailAndPassword(user: LoginInterface, cb: Function) {
    const { email, password } = user;
    signInWithEmailAndPassword(this.auth, email, password)
      .then((credentials) => {
        console.log(credentials);

        cb(credentials);
      })
      .catch(() => cb(null));
  }

  // ////// GOOGLE /////// //
  GoogleAuth() {
    return this.AuthLogin(new GoogleAuthProvider());
  }

  AuthLogin(user: any) {
    this.auth;
    signInWithPopup(this.auth, user)
      .then((credentials) => {
        console.log('You have been successfully logged in!');
        console.log(credentials);
        this.router.navigate(['customers']);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

interface SignUpInterface {
  email: string;
  password: string;
}
