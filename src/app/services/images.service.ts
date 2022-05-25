import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor(private http: HttpClient) { }

  private url = 'http://localhost:4000/images/images'; 
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'}),
  };

  public getImages(): Observable<any> {
    return this.http.get(this.url,this.httpOptions);
  }
}
