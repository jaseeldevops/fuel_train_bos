import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  passwordTextType = 'password';
  error: any = null;
  loading: any = false;

  companyDetails = {
    bg: '',
    logo: 'https://seeklogo.com/images/P/Petrol_Ofisi-logo-2582E081F0-seeklogo.com.png',
    name: 'COMPANY NAME',
    slogan: 'SLOGON HERE sdsdsdsdsd',
  };

  user: any = {
    name: '',
    password: '',
  };

  setUserName = (e: any) => (this.user.name = e.target.value);
  setUserPassword = (e: any) => (this.user.password = e.target.value);

  onClickLogin = () => {
    console.log(this.user);
    this.error = null;
    if (this.user.name === '') this.error = 'Enter a valid user name';
    else window.location.pathname = '';
    // TODO: your code
  };
}
