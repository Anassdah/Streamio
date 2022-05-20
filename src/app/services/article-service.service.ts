import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ArticleServiceService {

  private ArticleUrl = 'http://localhost:3000/article/'; // URL to web api
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'}),
  };
  constructor(
    private http: HttpClient
  ) {}
  addArticle(article: any): Observable<any> {
    return this.http.post<any>(this.ArticleUrl, article, this.httpOptions);
  }
  getArticle(article_id :string){
    return this.http.get<any>(this.ArticleUrl+article_id)
  }
  getAllArticles(){
    return this.http.get<any>(this.ArticleUrl);
  }
  
  addComment(article_id :any,comment :any):Observable<any>{
    return this.http.post<any>(this.ArticleUrl + article_id+"/comment", comment, this.httpOptions);
  }
}
