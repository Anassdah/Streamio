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
    
  }
  title = 'uploadfile';
 
  displaySingleImage!: Boolean;
  displayMultipleImages!: Boolean;
  displayMultipleImageArray!: Array<any>;
  displaySingleImageArray!: Array<any>;
 
  @ViewChild('singleInput', { static: false })
  singleInput!: ElementRef;
 
  @ViewChild('multipleInput', { static: false })
  multipleInput!: ElementRef;
 
  multipleImages = [];
 
  constructor(private http: HttpClient) {
    this.displaySingleImage = false;
    this.displayMultipleImageArray = [];
    this.displayMultipleImages = false;
    this.displaySingleImageArray = [];
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
        this.multipleInput.nativeElement.value = ""
        console.log(res.path)
        this.displayMultipleImages=true
        res.path.forEach((item :any)=>{
          this.images.unshift({
            img_url : "http://localhost:3000/" +item
          })
        });
        console.log(this.images);
        
    })
  }
}