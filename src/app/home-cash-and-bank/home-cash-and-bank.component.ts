import { Component, OnInit } from '@angular/core';
import { allDummyCashAndBank } from './dummy_data';

@Component({
  selector: 'app-home-cash-and-bank',
  templateUrl: './home-cash-and-bank.component.html',
  styleUrls: ['./home-cash-and-bank.component.css'],
})
export class HomeCashAndBankComponent implements OnInit {
  constructor() {}

  allBanks: any = allDummyCashAndBank;

  ngOnInit(): void {}
}
