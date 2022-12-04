import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-configuration-popups',
  templateUrl: './home-configuration-popups.component.html',
  styleUrls: ['./home-configuration-popups.component.css'],
})
export class HomeConfigurationPopupsComponent implements OnInit {
  @Input() popup: any;
  @Input() closePopUp: any;

  constructor() {}

  ngOnInit(): void {}
}
