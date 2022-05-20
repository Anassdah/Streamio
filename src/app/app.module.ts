import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
<<<<<<< HEAD
import { MarkdownModule } from 'ngx-markdown';
import { ToastrModule } from 'ngx-toastr';

import 'prismjs';
import 'prismjs/components/prism-typescript.min.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-highlight/prism-line-highlight.js';

import { HttpClientModule } from '@angular/common/http';
import { FileUploadModule } from 'ng2-file-upload';
import { FormsModule } from '@angular/forms';



=======
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
>>>>>>> b873f00870b926cda9763b9d2b22e8a6e55de66b
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
<<<<<<< HEAD
    MarkdownModule.forRoot(),
    HttpClientModule,
    ToastrModule.forRoot(),
    FormsModule,
    FileUploadModule,
=======
    HttpClientModule,
    ReactiveFormsModule
>>>>>>> b873f00870b926cda9763b9d2b22e8a6e55de66b
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
