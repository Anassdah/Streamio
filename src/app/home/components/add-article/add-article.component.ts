import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleServiceService } from 'src/app/services/article-service.service';
@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.scss']
})
export class AddArticleComponent implements OnInit {

  constructor(private ArticleService:ArticleServiceService,
    private router: Router) { }

  ngOnInit(): void {

  }
  article_title:string ="Article title ";
  description :string ="Achieve the maximum speed possible on the Web Platform today, and take it further, via Web Workers and server-side rendering Angular puts you in control over scalability. Meet huge data requirements by building data models on RxJS, Immutable.js or another push-model."

  img_url:string ="";
  selecetdFile!: File;
  ArticlePreview!: string;

  onFileUpload(event: any) {
    this.selecetdFile = event.target.files[0];
    
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.result != null) {
        this.ArticlePreview = reader.result.toString();
      }
    };
    reader.readAsText(this.selecetdFile);
  }

  uploadArticle(){
    if(this.ArticlePreview && this.img_url && this.description && this.article_title){
      const article={
        title : this.article_title,
        image_url : this.img_url,
        description : this.description,
        content:this.ArticlePreview,
        author_id : "1",
        likes : "150",
        comments :[]
      };
      this.ArticleService.addArticle(article).subscribe(() => {
        this.router.navigate(
          ['/articles/']
        );
      });





    }
  }
}
