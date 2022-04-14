import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  currentUser:string = "TestAccount";
  loggedIn:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
