import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import { UserServiceService} from '../../service/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user_name: string;
  password: string;
  show_mobile_field: boolean = true;
  show_email_field: boolean = false;

    constructor(private userService: UserServiceService) { }

  ngOnInit() {
  }

  login() {
    console.log(this.password);
       this.userService.login(this.user_name, this.password).subscribe(
          data => { console.log('Login successfully')},
          err => console.error(err),
          () => console.log('done')
        );
      }

      changeToEmail() {
        this.show_mobile_field = false;
        this.show_email_field = true;
      }
      changeToMobile() {
        this.show_email_field = false;
        this.show_mobile_field = true;
      }
}
