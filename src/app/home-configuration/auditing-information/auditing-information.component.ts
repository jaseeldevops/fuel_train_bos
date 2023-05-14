import { Component, Input, OnInit } from '@angular/core';
import { allAuditingInformationDummy } from './dummy_data';

@Component({
  selector: 'app-auditing-information',
  templateUrl: './auditing-information.component.html',
  styleUrls: [
    './auditing-information.component.css',
    '../home-configuration.component.css',
  ],
})
export class AuditingInformationComponent implements OnInit {
  @Input() onChangePage: any;

  allAuditingInformation:any = allAuditingInformationDummy;

  constructor() {}

  ngOnInit(): void {}
}
