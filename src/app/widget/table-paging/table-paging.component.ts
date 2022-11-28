import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-paging',
  templateUrl: './table-paging.component.html',
  styleUrls: ['./table-paging.component.css'],
})
export class TablePagingComponent implements OnInit {
  @Input() paging: any;

  constructor() {}

  // paging = {
  //   page: 1,
  //   totalItems: 3000,
  //   showingItemsCount: 10,
  //   totalPage: 10,
  // };

  ngOnInit(): void {}
}
