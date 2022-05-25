import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authHost = "http://localhost:4000";

  constructor(private http: HttpClient) { }

  //TODO: implement register methode

  register(username: string, email: string, password: string) {
    return this.http.post(this.authHost+"/register", {username: username, email: email, password: password});
  }

  login(email: string, password: string) {
    //Login requires email and password
    return this.http.post(this.authHost+"/login", {email: email, password: password});
  }

  setSession(authResult:any){
    const expiresAt = (new Date).getTime() + authResult.expiresIn;

    localStorage.setItem('id_token', authResult.user.token);
    localStorage.setItem('username', authResult.user.username);
    localStorage.setItem('user_id', authResult.user._id);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
  }

  getUsername() {
    return localStorage.getItem("username");
  }
  getUser_id() {
    return localStorage.getItem("user_id");
  }

  getExpiration() {
    //returns moment of expiration in epoch format
    const expiration = localStorage.getItem("expires_at") || "0";
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }    

  logout() {
    localStorage.removeItem("id_token");
    localStorage.removeItem("username");
    localStorage.removeItem("expires_at");
  }

  isLoggedIn() {
    //checks if current time is before expiration
    return moment().isBefore(this.getExpiration());
  }


  isLoggedOut() {
    return !this.isLoggedIn();
  }
}
