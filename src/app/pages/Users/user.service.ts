import { Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
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
  userEmail: any;
  constructor(
    private auth: Auth,

    private router: Router
  ) {}

  showUserName() {
    return this.auth.currentUser?.email;
  }
  showUserCreatedDate() {
    return this.auth.currentUser?.metadata.creationTime;
  }

  signupWithEmailAndPassword(user: SignUpInterface, cb: Function) {
    const { email, password } = user;
    createUserWithEmailAndPassword(this.auth, email, password)
      .then((credentials) => {
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
        cb(credentials);
      })
      .catch(() => cb(null));
  }

  // ////// GOOGLE login/signup /////// //

  signUpAndLoginWithGoogle(cb: Function) {
    const provider = new GoogleAuthProvider();
    signInWithPopup(this.auth, provider)
      .then((data) => {
        console.log('loged succefully with google');
        cb(data);
      })
      .catch(() => cb(null));
  }

  // Check user status //
  getUserStatus(cb: Function) {
    return onAuthStateChanged(this.auth, (user) => cb(user));
  }
}

interface SignUpInterface {
  email: string;
  password: string;
}
