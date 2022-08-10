import { Component, ViewChild } from '@angular/core';
import { HeaderComponent } from './header/header.component';

export  interface  Card{
   title:string;
  subtitle:string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  cards = [{title:"title 1", subtitle : "subtitle 1"},
          {title:"title 2", subtitle : "subtitle 2"},
          {title:"title 3", subtitle :"subtitle 3"}]
  }

