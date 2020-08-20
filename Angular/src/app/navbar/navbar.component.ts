import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public navButtons = ['Home', 'About us', 'Blog', 'Team', 'Contacts'];

  constructor() { }

  ngOnInit(): void {
  }

}
