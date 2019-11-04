import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {

  constructor() { }


  posts = [
    {
      title : 'Titre article 1',
      content: 'contenu article 1: Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.',
      loveIts: 1,
    },
    {
      title : 'Titre article 2',
      content: 'contenu article 2: Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.',
      loveIts: -1,
    },
    {
      title : 'Titre article 3',
      content: 'contenu article 3: Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.',
      loveIts: 1,
    },
    {
      title : 'Titre article 4',
      content: 'contenu article 4 : Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.',
      loveIts: 0,
    }
  ];

  ngOnInit() {
  }

}
