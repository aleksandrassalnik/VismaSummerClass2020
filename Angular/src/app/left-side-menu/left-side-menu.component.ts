import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-left-side-menu',
  templateUrl: './left-side-menu.component.html',
  styleUrls: ['./left-side-menu.component.scss'],
})
export class LeftSideMenuComponent {
  public menuButtons = [
    {
      value:
        this.route.snapshot.routeConfig.path === 'main'
          ? 'New Questions'
          : 'All Questions',
      icon: 'questionsIcon',
      route:
        this.route.snapshot.routeConfig.path === 'main'
          ? '../newQuestions'
          : '../main',
    },
    { value: 'Lorem', icon: 'tagsIcon' },
    { value: 'Lorem, ipsum', icon: 'badgesIcon' },
    { value: 'Lorem, ipsum', icon: 'categoriesIcon' },
    { value: 'Lorem', icon: 'usersIcon' },
  ];

  public socialButtonIcons = ['facebook', 'twitter', 'google'];

  constructor(private route: ActivatedRoute) {}
}
