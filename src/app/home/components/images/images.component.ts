import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { ImagesService } from 'src/app/services/images.service';

export interface image{
  img_url:string;
}
@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss'],
})
export class ImagesComponent implements OnInit {
  images:image[] =[];
  ngOnInit() {
    this.getImages();
    
  }
  getImages(): void {
    this.imageService.getImages().subscribe((images) => {
      this.images = images.reverse();
      console.log(this.images);
    });
  }
  multipleImages = [];
 
  constructor(
    private http: HttpClient,
    private imageService :ImagesService) {
    
  }
  selectMultipleImage(event: any) {
    if (event.target.files.length > 0) {
      this.multipleImages = event.target.files;
    }
  }

  onMultipleSubmit() {
    const formdata = new FormData()
 
    for (let img of this.multipleImages) {
      formdata.append('files',img)
    }
    this.http.post<any>('http://localhost:3000/images', formdata)
      .subscribe((res:any) => {
        console.log(res.path)
        res.path.forEach((item :any)=>{
          this.images.unshift({
            img_url : item
          })
        });
        console.log(this.images);
        
    })
  }
}