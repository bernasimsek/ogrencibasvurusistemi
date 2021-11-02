  import {
    Injectable
  } from '@angular/core';
  import {
    AngularFireAuth
  } from '@angular/fire/compat/auth/';
  import {
    Router
  } from '@angular/router';
  import firebase from 'firebase/compat/app';


  export interface UserID {
    username: string;
    uid: string;
  }

  export interface fakulte {
    name: string;
  }

  @Injectable({
    providedIn: 'root'
  })
  export class AuthService {
    private user: UserID;
    constructor(public auth: AngularFireAuth, private router: Router, ) {}

    loginFireauth(value) {
      return new Promise < any > ((resolve, reject) => {
        firebase.auth().signInWithEmailAndPassword(value.email, value.password).then(
          res => resolve(res),
          error => reject(error)
        )
      })
    }

    setUser(user: UserID) {
      return this.user = user;
    }

    getUserUid(): string {
      return this.user.uid
    }
 

    loginWithEmail(data: any) {
      this.auth.signInWithEmailAndPassword(data.email, data.password)
        .then(data => {
          alert('Login successful');
          this.router.navigateByUrl('/');
        })

    }

    logout() {
      this.auth.signOut().then(() => {
        this.router.navigate(['home']);
      });
    }

    userRegistration(value) {
      return new Promise < any > ((resolve, reject) => {
        firebase.auth().createUserWithEmailAndPassword(value.email, value.password).then(
          res => resolve(res),
          error => reject(error)
        )
      })
    }
  }
