import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.less']
})
export class SidebarComponent implements OnInit {
  loggedIn:boolean = false;
  role_administrator:boolean = false;
  role_projectmaster:boolean = false;
  role_user:boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
