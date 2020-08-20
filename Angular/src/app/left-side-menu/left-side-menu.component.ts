import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-side-menu',
  templateUrl: './left-side-menu.component.html',
  styleUrls: ['./left-side-menu.component.scss'],
})
export class LeftSideMenuComponent implements OnInit {
  public menuButtons = [
    { value: 'New Questions', icon: 'questionsIcon' },
    { value: 'Lorem', icon: 'tagsIcon' },
    { value: 'Lorem, ipsum', icon: 'badgesIcon' },
    { value: 'Lorem, ipsum', icon: 'categoriesIcon' },
    { value: 'Lorem', icon: 'usersIcon' },
  ];

  public socialButtonIcons = ['facebook', 'twitter', 'google'];
  constructor() {}

  ngOnInit(): void {}
}
