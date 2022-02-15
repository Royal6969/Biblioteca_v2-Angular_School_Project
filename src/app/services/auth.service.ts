import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userVerify?:any;

  constructor(
    private angularFireAuth: AngularFireAuth
  ) { }

  async register(email: string, password: string) {
    try {
      return await this.angularFireAuth.createUserWithEmailAndPassword(email, password);
    } catch (err) {
      console.log("error en login: ", err);
      return null;
    }
  }

  async login(email: string, password: string) {
    try {
      return await this.angularFireAuth.signInWithEmailAndPassword(email, password);
    } catch (err) {
      console.log("error en login: ", err);
      return null;
    }
  }

  async loginWithGoogle(email: string, password: string) {
    try {
      this.getUserInfo().subscribe(result =>{
        // this.userVerify = (result !== null && result.emailVerified !== false) ? true:false;
        this.userVerify = (result !== null) ? true:false;
      });

      return await this.angularFireAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    
    } catch (err) {
      console.log("error en login con Google: ", err);
      return null;
    }
  }

  getUserInfo() {
    return this.angularFireAuth.authState;
  }

  get isLoggedIn(){
    try {
      this.getUserInfo().subscribe(result =>{
        // this.userVerify = (result !== null && result.emailVerified !== false) ? true:false;
        this.userVerify = (result !== null) ? true:false;
      });
    } catch (err) {
      console.log("Error: " + err);
      return false;
    }
    return this.userVerify;
  }


  logout() {
    this.angularFireAuth.signOut();
  }
}
