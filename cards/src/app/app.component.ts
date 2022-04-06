import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts=[
    {title:'Near Tree',
    imageUrl:'assets/tree.jpeg',
    username:'nature',
    content:'I saw this tree Today'},
    {title:'Snowy Mountain',
    imageUrl:'assets/mountain.jpeg',
    username:'mountainlover',
    content:'Here is a picture of a snowy mountain'},
    {title:'Nountain Biking',
    imageUrl:'assets/biking.jpeg',
    username:'biking2222',
    content:'I did some biking today'}
  ]
}
