import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommentsComponent }   from './comment.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ CommentsComponent ],
  bootstrap:    [ CommentsComponent ]
})

export class AppModule { }
