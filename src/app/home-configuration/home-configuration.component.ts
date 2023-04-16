import { Component, Input, OnInit } from '@angular/core';
import { drowerIconList } from '../home/store';
import {
  allAlarmInterlockDummy,
  allDeviceConfigurationDummy,
  allDlllogViewerDummy,
  allHosExceptionalLogDummy,
  allMaintenanceDummy,
  allSiteConfigurationDummy,
  allSoftwareConfigurationDummy,
  allUserManagementDummy,
} from './dummy_data';

@Component({
  selector: 'app-home-configuration',
  templateUrl: './home-configuration.component.html',
  styleUrls: ['./home-configuration.component.css'],
})
export class HomeConfigurationComponent implements OnInit {
  @Input() page: any;
  constructor() {}

  subTitles: any =
    drowerIconList.find((it: any) => it.path === 'configuration')?.subTitles ??
    [];

  navCount = 0;
  data: any = null;
  isLoading = false;

  popup: any = null;
  closePopUp: any = () => (this.popup = null);
  setPopup: any = (it: any) => (this.popup = it);

  ngOnInit(): void {
    this.setPage();
  }

  // This function will open the page based on the URL
  setPage = () => {
    const path = window.location.pathname.split('/');
    if (path !== null)
      if (path.length > 3) {
        this.page = path[3];
        this.getData(path[3]);
      }
    this.navCount = 0;
  };

  setPageIn = (it: any) => {
    this.page = it.path;
    this.navCount = 0;
    this.getData(it.path);
  };

  onChangePage = (p:any) => (this.page = p);

  getData = (s: any) => {
    this.isLoading = true;
    // API calls are called from here based on which button thay are clicked
    switch (s) {
      case 'hosExceptionalLog':
        this.data = allHosExceptionalLogDummy;
        break;
      case 'siteConfiguration':
        this.data = allSiteConfigurationDummy;
        break;
      case 'deviceConfiguration':
        this.data = allDeviceConfigurationDummy;
        break;
      case 'softwareConfiguration':
        this.data = allSoftwareConfigurationDummy;
        break;
      case 'userManagement':
        this.data = allUserManagementDummy;
        break;
      case 'alarmInterlock':
        this.data = allAlarmInterlockDummy;
        break;
      case 'maintenance':
        this.data = allMaintenanceDummy;
        break;
      case 'logViewer':
        this.data = allDlllogViewerDummy;
        break;
      default:
        break;
    }
    this.isLoading = false;
  };
}
