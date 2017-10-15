import { LoginService } from './../login/login.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }
  logout(){
    this.loginService.logout();
  }

}
