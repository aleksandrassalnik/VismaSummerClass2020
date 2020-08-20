import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right-side-menu',
  templateUrl: './right-side-menu.component.html',
  styleUrls: ['./right-side-menu.component.scss'],
})
export class RightSideMenuComponent implements OnInit {
  public tags = [
    'Lorem, ipsum',
    'Lorem, ipsum dolor',
    'Lorem',
    'Lorem, ipsum',
    'Lorem',
    'See more tags',
  ];

  public hotQuestions = [
    'Lorem ipsum dolor sit amet',
    'Lorem, ipsum dolor',
    'Lorem ipsum dolor sit amet consectetur adipisicing',
    'Lorem ipsum dolor sit',
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit',
  ];
  
  constructor() {}

  ngOnInit(): void {}
}
