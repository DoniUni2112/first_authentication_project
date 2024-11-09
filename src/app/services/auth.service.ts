import { Injectable } from '@angular/core';
import {
  Auth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUser!: any;

  constructor(private auth: Auth) {}

  async loginWithGoogle() {
    const credential = await signInWithPopup(
      this.auth,
      new GoogleAuthProvider(),
    );
    this.currentUser = credential.user;
    console.log(credential);
  }

  async login(username: string, password: string) {
    try {
      const credential = await signInWithEmailAndPassword(
        this.auth,
        username,
        password,
      );
      this.currentUser = credential.user;
      console.log(credential);
      return true;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  }

  async signUp(email: string, password: string) {
    try {
      const credential = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password,
      );
      this.currentUser = credential.user;
      console.log('User created:', credential);
      return true;
    } catch (error) {
      console.error('Sign-up error:', error);
      return false;
    }
  }

  async logout() {
    await this.auth.signOut();
    this.currentUser = null;
  }
}
