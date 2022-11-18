import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-operations',
  templateUrl: './home-operations.component.html',
  styleUrls: ['./home-operations.component.css'],
})
export class HomeOperationsComponent implements OnInit {
  @Input() subTitles: any;
  constructor() {}

  ngOnInit(): void {}

  path = window.location.pathname;
}
