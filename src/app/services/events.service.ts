import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http: HttpClient) { }
  private URL="http://34.117.1.114";
  
  private url = this.URL+'/events/events/'; 
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'}),
  };
  public getEvents(user_id:any): Observable<any> {
    return this.http.get(this.url+user_id,this.httpOptions);
  }
  public addEvent(event:any): Observable<any> {
    return this.http.post(this.url,event,this.httpOptions);
  }
  public regiter_to_event(infos :any,event_id:any): Observable<any> {
    return this.http.post(this.url+event_id,infos,this.httpOptions);
  }
  public getEvents_withTags(tags:any):Observable<any>{
    let query="";
    if(tags.length!=0) query="?tags[]="+tags.join("&tags[]=");
    console.log(this.url+query);
    return this.http.get(this.url+query,this.httpOptions);
  }
  public cancel_Registration(event_id:string){
    return this.http.put(this.url+event_id,this.httpOptions);
  }

}
