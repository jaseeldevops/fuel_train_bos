import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-document-prefix',
  templateUrl: './document-prefix.component.html',
  styleUrls: [
    './document-prefix.component.css',
    '../home-configuration.component.css',
  ],
})
export class DocumentPrefixComponent implements OnInit {
  @Input() onChangePage: any;

  constructor() {}

  ngOnInit(): void {}
}
