import { Component, OnInit , Input , Output, EventEmitter} from '@angular/core';
import { Card } from '../app.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  
})
export class HeaderComponent implements OnInit {
  @Input()
card!: Card;
  @Input() in:number = 0;
  constructor() { }
  ngOnInit(): void {
  }

} 
