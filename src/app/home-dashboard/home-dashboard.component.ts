import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home-dashboard',
  templateUrl: './home-dashboard.component.html',
  styleUrls: ['./home-dashboard.component.css'],
})
export class HomeDashboardComponent implements OnInit {
  constructor() {}

  page = 1;

  ngOnInit(): void {
  }

}
