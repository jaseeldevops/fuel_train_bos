import { Component, OnInit } from '@angular/core';
import { dummyAllreports, dummySampleEachReport } from './dummy_data';

@Component({
  selector: 'app-home-report',
  templateUrl: './home-report.component.html',
  styleUrls: ['./home-report.component.css'],
})
export class HomeReportComponent implements OnInit {
  constructor() {}

  isLoading = false;

  page: any = null;

  allReports: any = [];

  ngOnInit(): void {
    this.allReports = dummyAllreports;
  }

  // values for the filter is stored inside the filterBody
  filterDate: any = '';
  onChnageFilterDate = (e: any) => (this.filterDate = e.target.value);
  onClickFilterSubmit = () => {
    // TODO: You can write Your filter code here
    // If any value is a empty string that means all is selected
    console.log(this.filterDate);
  };

  onClickAny = (id: any) => {
    this.selected = dummySampleEachReport;
  };

  // This is only for showing the all report in once
  margeAllReport = () => {
    let temp: any = [];
    for (let i = 0; i < this.allReports.length; i++)
      temp = temp.concat(this.allReports[i].list);
    return temp;
  };

  selected: any = null;
}
