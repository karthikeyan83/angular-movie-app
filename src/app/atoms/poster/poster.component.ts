import { Component,OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
})
export class PosterComponent {
  @Input() poster:string;
  constructor() { }
}
