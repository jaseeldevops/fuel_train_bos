import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c-store',
  templateUrl: './c-store.component.html',
  styleUrls: ['./c-store.component.css'],
})
export class CStoreComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  catogoryWaysSales = [
    { title: 'Lubricants', value: 100 }, //value in persentage
    { title: 'Grocery', value: 90 },
    { title: 'Snacks', value: 80 },
    { title: 'Beverages', value: 90 },
    { title: 'Services', value: 60 },
    { title: 'Vegetables', value: 40 },
  ];
  catogoryWaysStocks = [
    {
      title: 'Lubricants',
      value: 100, //value in persentage
      valueIn: 75, //value in persentage
      color: '#F0A04A7B',
      colorIn: '#F0A04A',
    },
    {
      title: 'Grocery',
      value: 90,
      valueIn: 50,
      color: '#9B1A527B',
      colorIn: '#9B1A52',
    },
    {
      title: 'Snacks',
      value: 80,
      valueIn: 40,
      color: '#1A529B7B',
      colorIn: '#1A529B',
    },
    {
      title: 'Beverages',
      value: 90,
      valueIn: 50,
      color: '#D073BA7B',
      colorIn: '#D073BA',
    },
    {
      title: 'Services',
      value: 60,
      valueIn: 50,
      color: '#73CDD07B',
      colorIn: '#73CDD0',
    },
    {
      title: 'Vegetables',
      value: 40,
      valueIn: 30,
      color: '#85D0737B',
      colorIn: '#85D073',
    },
  ];

  mopWiseSale: any = [
    { value: 20, title: 'CASH', color: '#809EED' }, //value in persentage
    { value: 65, title: 'CARD', color: '#26428b' },
    { value: 15, title: 'UPI', color: '#4a6dcb' },
  ];

  lowSlockItems = [
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Oranges_-_whole-halved-segment.jpg/1200px-Oranges_-_whole-halved-segment.jpg',
      name: 'Aquafina water bottle 1 litre',
      qty: '1 PSC',
      textColor: '#C91717',
      bgColor: '#F9D1D17B',
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Oranges_-_whole-halved-segment.jpg/1200px-Oranges_-_whole-halved-segment.jpg',
      name: 'Lay s Potato Chips 52g',
      qty: '1 PSC',
      textColor: '#039003',
      bgColor: '#0390037B',
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Oranges_-_whole-halved-segment.jpg/1200px-Oranges_-_whole-halved-segment.jpg',
      name: 'Pepsi Soft Drink, 750ml Pet Bottle',
      qty: '1 PSC',
      textColor: '#C91717',
      bgColor: '#F9D1D17B',
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Oranges_-_whole-halved-segment.jpg/1200px-Oranges_-_whole-halved-segment.jpg',
      name: 'Pepsi Mountain Dew Soft Drink Can',
      qty: '1 PSC',
      textColor: '#C91717',
      bgColor: '#F9D1D17B',
    },
  ];

  // ////////////////////////////////////////////////////////////////////////
  // ////////////////////////////////////////////////////////////////////////
  // ////////////////////////////////////////////////////////////////////////
  // ////////////////////////////////////////////////////////////////////////
  // <--START--> TEMPLATE VARIABLES
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
  // <--END--> TEMPLATE VARIABLES
}
