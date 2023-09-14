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

  addExpenseForm: any = {
    items: [{}],
  };

  onChangeExpenseItem = (e: any) => {
    this.addExpenseForm.items.push({});
  };

  onClickExpenseDltItem = (k: any) => {
    if (this.addExpenseForm.items?.length > 1)
      this.addExpenseForm.items.splice(k, 1);
  };

  onClickSaveExpense = (type: any) => {
    if (type === 'SAVE & PRINT') {
    } else if (type === 'Save & Add New') {
    } else if (type === 'Save') {
    }
  };
}
