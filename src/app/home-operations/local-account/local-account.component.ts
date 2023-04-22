import { Component, Input, OnInit } from '@angular/core';
import { allLocalAccountDummy } from './dummy_data';

@Component({
  selector: 'app-local-account',
  templateUrl: './local-account.component.html',
  styleUrls: [
    './local-account.component.css',
    '../home-operations.component.css',
  ],
})
export class LocalAccountComponent implements OnInit {
  @Input() onChangePage: any;
  constructor() {}

  popUp = '';

  allLocalAccount: any = allLocalAccountDummy;

  ngOnInit(): void {}
}
