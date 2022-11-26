import { Component, Input, OnInit } from '@angular/core';
import { drowerIconList } from '../home/store';

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

  ngOnInit(): void {
    this.setPage();
  }

  // This function will open the page based on the URL
  setPage = () => {
    const path = window.location.pathname.split('/');
    if (path !== null) if (path.length > 3) this.page = path[3];
    this.navCount = 0;
  };

  setPageIn = (it: any) => {
    this.page = it.path;
    this.navCount = 0;
  };
}
