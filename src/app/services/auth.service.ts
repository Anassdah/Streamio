import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url="http://34.117.1.114";

  private authHost = this.url;

  constructor(private http: HttpClient) { }


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
    localStorage.setItem('role', authResult.user.role);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
  }

  

  getUsernameFromId(user_id: string): Observable<UsernameResponse> {
    return this.http.get<UsernameResponse>(this.authHost + "/"+user_id+"/username");
  }

  getUsername() {
    return localStorage.getItem("username");
  }
  getUserRole() {
    return localStorage.getItem("role");
  }
  getUser_id() {
    return localStorage.getItem("user_id");
  }
  getUser_token() {
    return localStorage.getItem("id_token");
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
    localStorage.removeItem("user_id");
    localStorage.removeItem("role");
  }

  isLoggedIn() {
    //checks if current time is before expiration
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }
}

interface UsernameResponse {
  username: string
}