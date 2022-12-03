import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-operations-popups',
  templateUrl: './home-operations-popups.component.html',
  styleUrls: ['./home-operations-popups.component.css'],
})
export class HomeOperationsPopupsComponent implements OnInit {
  @Input() popup: any;
  @Input() closePopUp: any;

  constructor() {}

  ngOnInit(): void {}
}
