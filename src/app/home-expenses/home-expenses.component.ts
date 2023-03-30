import { Component, OnInit } from '@angular/core';
import { dummyExpenseList } from './dummy';

@Component({
  selector: 'app-home-expenses',
  templateUrl: './home-expenses.component.html',
  styleUrls: ['./home-expenses.component.css'],
})
export class HomeExpensesComponent implements OnInit {
  constructor() {}

  allExpenses: any = dummyExpenseList;

  addExpense: any = null;

  ngOnInit(): void {}
}
