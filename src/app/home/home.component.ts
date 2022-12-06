import { Component, OnInit } from '@angular/core';
import { drowerIconList } from './store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  isLoading = false;
  // This is the flag for showing the popup when the SOS button is clicked.
  isSosPopup = false;
  // This is the flag for showing the logout confirm popup is visible or not
  isLogoutConfirmPopup = false;
  // This is varible is a object which will store the change password details
  changePassword: any = null; // if it is null then it will not show the popup, if it is not null then it will show the popup
  // This is the flag for showing Wethhrt the notification POPUP is opened or not.
  isNotificationPopup = false;
  // This is the flag for showing the popup when the profile is clicked.
  isProfilePopup = false;
  // This is varible is indicate the path of home based on the selected one
  drowerPath = 'dashboard';
  // This is varible is indicate which sidebar option is acive.(Note:- if you change to ops then default ops will shoe in home)
  drowerIndex = 0;
  subPath: any = '';

  ngOnInit(): void {
    // The following two lines will initate the path or tab selected in home based on the URL
    const path = window.location.pathname.split('/')[2];
    if (path !== undefined) this.drowerPath = path;
  }

  // Following list will be the list of opthon availble in the side bar, based on the path the coponent is viewed
  drowerIcon = drowerIconList;

  // List if Notificationd
  allNotifications = [
    {
      title: 'Low level',
      time: '28 09 2022 15:34:22',
      acknowledge: 'ACKNOWLEDGE',
      icon: '',
    },
    {
      title: 'Low level',
      time: '28 09 2022 15:34:22',
      acknowledge: 'ACKNOWLEDGE',
      icon: '',
    },
  ];

  // The following function will decide what shoul happen when any of the option in the side bar is clicked
  onDrowerIconClick = (k: number) => {
    this.drowerPath = this.drowerIcon[k].path;
    this.drowerIndex = k;
    window.history.replaceState('HOME', 'HOME', 'home/' + this.drowerPath);
    this.subPath = '';
  };

  // The following function will decide what shoul happen when any of the sub option in the side bar is clicked
  onDrowerSubPathClick = (i: number, k: number) => {
    this.onDrowerIconClick(i);
    const ss: any = this.drowerIcon[i]?.subTitles ?? [];
    this.subPath = ss[k].path;
    const url = `home/${this.drowerPath}/${this.subPath}`;
    window.history.replaceState('HOME', 'HOME', url);
    window.location.reload();
  };

  // When the user Click SOS confirm button
  onClickSOSStopConfirm = () => {
    this.isSosPopup = false;
  };

  // The following function will indicate what happene when the logout button is clicked
  onClickLogout = () => {
    this.toast = {
      title: 'Succusfully',
      content: 'You are susseccfully logged out',
      color: '#c20204',
    };
  };

  onClickChangePassowrd = () => {
    alert();
  };

  // The following function will indicate what happene when the logout button is clicked
  userData = {
    logo: 'https://logos-world.net/wp-content/uploads/2022/03/Pepsico-Logo.png',
    name: 'Jafar Alhusayn',
    photo:
      'https://i.pinimg.com/280x280_RS/e4/86/86/e4868681b6e2cc4ce83c3b9a5d010b6c.jpg',
  };
  toast: any = null;
}
