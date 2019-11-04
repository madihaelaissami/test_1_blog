import { Component, OnInit, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() post_titre: string;
  @Input() post_contenu: string;
  @Input() post_loveit: number = 0;

  dontloveIts : number = 0;
  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });

  constructor() {}

  ngOnInit() {

  }
  weloveit() {
    this.post_loveit = 1;
    console.log(this.post_loveit);
    return this.post_loveit
  }
  wedontloveit() {
    this.post_loveit = -1;
    console.log(this.post_loveit);
    return this.post_loveit;
  }
  getColor() {
    if(this.post_loveit < 0) {
      return 'red';
    } else if(this.post_loveit > 0) {
      return 'green';
    }

  }

}


