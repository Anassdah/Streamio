import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http: HttpClient) { }
  private url = 'http://localhost:4000/events/events'; 
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'}),
  };
  public getEvents(): Observable<any> {
    return this.http.get(this.url,this.httpOptions);
  }
  public addEvent(event:any): Observable<any> {
    return this.http.post(this.url,event,this.httpOptions);
  }
}
