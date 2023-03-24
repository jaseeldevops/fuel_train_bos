import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c-store',
  templateUrl: './c-store.component.html',
  styleUrls: ['./c-store.component.css'],
})
export class CStoreComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  mopWiseSale: any = [
    { value: 20, title: 'CASH', color: '#809EED' },
    { value: 65, title: 'CARD', color: '#26428b' },
    { value: 15, title: 'UPI', color: '#4a6dcb' },
  ];

  // ////////////////////////////////////////////////////////////////////////
  // ////////////////////////////////////////////////////////////////////////
  // ////////////////////////////////////////////////////////////////////////
  // ////////////////////////////////////////////////////////////////////////
  // TEMPLATE VARIABLES
  makeArryForPie = (array: any, k: number) => {
    const c = array[k]?.color || 'gray';
    var s = 0;
    for (let i = 0; i < k; i++) s = s + array[i].value;
    s = s * 3.6;
    var e = array[k]?.value * 3.6 + s;
    const element = [];
    for (let i = s; i < e; i++) element.push({ v: i, c });
    return element;
  };
  pieChardSelected = 0;
}
