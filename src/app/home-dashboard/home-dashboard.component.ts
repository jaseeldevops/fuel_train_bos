import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions, ChartType } from 'chart.js';
import {
  allAlarmsDummy,
  allAttendantWiseSaleDummy,
  allDeviceStatusDummy,
  allForecastVsSalesDummy,
  allNozzleDummy,
  allProductIdliveryDumy,
  allProductInvenoryDumy,
  allSalesSummaryDummy,
  allTodayPriceDummy,
} from './dummy_data';

@Component({
  selector: 'app-home-dashboard',
  templateUrl: './home-dashboard.component.html',
  styleUrls: ['./home-dashboard.component.css', './body.css'],
})
export class HomeDashboardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.setProductProfile();
  }

  allTodayPrice = allTodayPriceDummy;
  allSalesSummary = allSalesSummaryDummy;
  allDeviceStatus = allDeviceStatusDummy;
  allProductInvenory = allProductInvenoryDumy;
  allProductDelivery = allProductIdliveryDumy;
  allForecastVsSales = allForecastVsSalesDummy;
  allAlarms = allAlarmsDummy;
  allAttendantWiseSale = allAttendantWiseSaleDummy;
  allNozzle = allNozzleDummy;

  scrollCount = { productInventoryBody: 0, productDeliveryBody: 0 };

  scrollProductInventory = (axis: any, id: any) => {
    var c =
      id === 'productInventoryBody'
        ? this.scrollCount.productInventoryBody
        : this.scrollCount.productDeliveryBody;

    var element = document.getElementById(id);
    if (element === null) return;
    var x = element.getBoundingClientRect().x;
    var width = element.getBoundingClientRect().width;
    const sD: any = document.getElementById(id);
    if (
      x + width * (c + axis) < element.scrollWidth &&
      x + width * (c + axis) > 0
    )
      c += axis;
    sD.scrollTo({
      left: x + width * c - (x + ((width * c) % width)),
      behavior: 'smooth',
    });
  };

  // Sales inventory / trands
  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30,
    ],
    datasets: [
      {
        data: [
          65, 59, 80, 81, 56, 55, 40, 65, 55, 40, 65, 59, 80, 81, 56, 55, 40,
        ],
        label: '',
        borderWidth: 1,
        tension: 0.5,
        borderColor: '#406CA5',
        backgroundColor: 'rgba(255,0,0,0)',
      },
      {
        data: [
          80, 81, 56, 55, 40, 65, 59, 80, 40, 65, 59, 80, 81, 56, 55, 40, 65,
        ],
        label: '',
        borderWidth: 1,
        tension: 0.5,
        borderColor: 'black',
        backgroundColor: 'rgba(255,0,0,0)',
      },
      {
        data: [
          80, 55, 40, 65, 59, 80, 40, 65, 59, 80, 81, 56, 55, 40, 65, 81, 56,
          55, 40, 65, 59, 80, 40, 65, 59, 80, 81, 56, 55, 40, 65,
        ],
        label: '',
        borderWidth: 1,
        tension: 0.5,
        borderColor: 'black',
        backgroundColor: 'rgba(255,0,0,0)',
      },
    ],
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false,
  };
  public lineChartLegend = true;
  salesInventoryTrendsDays = ['Today', 'Yesterday', 'Past 7 days', 'Month'];
  salesInventoryTrendsSelectedDay: any = 'Today';
  salesInventoryTrendsSelectedType: any = 'Sales';
  salesInventoryTrendsDayChange = (v: any) => {
    this.salesInventoryTrendsSelectedDay = v;
    alert(v);
    // TODO: run your code
  };
  salesInventoryTrendsTypeChange = (v: any) => {
    this.salesInventoryTrendsSelectedType = v;
    alert(v);
    // TODO: run you code
  };
  // --END--

  // Hover popup Status
  productSalesHoverPopup: any = null;
  // Thes sellected one is seted to this it may be sale on inventory
  // productSalesSelected = this.productSalesInventory.sales;

  // --END--

  // --START-- Prodect and sale data structuring strats from here
  // Provide the time that as how you want to view it on the UI
  // Always Keep 4 object inside this, other ways UI will not be a proper
  // Always keep the totel value of each data be 360, other ways UI will not be a proper
  productProfile: any = {
    data: [
      {
        title: 'Mogas 91',
        color: '#406CA5',
        value: 300,
        displayValue: '10%',
      },
      // values sould be in in angle (deg)
      // If the value is in the form of % the you should conver it to deg (eg:- value: (n * 3.6))
      { title: 'Mogas 95', color: '#F3C986', value: 10, displayValue: '20%' },
      { title: 'Diesel', color: '#86B6F3', value: 50, displayValue: '20%' },
    ],
    angle: [],
  };

  // this is the methord of converting data to css requerd format
  // ! Don't tru to change anything in this if you are not trying to edit anything releted to UI
  setProductProfile = () => {
    var el = this.productProfile?.data;
    var k = 0;
    var c = el[k]?.value;
    this.productProfile.title = el[k]?.title;
    this.productProfile.displayValue = el[k]?.displayValue;
    this.productProfile.value = Math.round(el[k]?.value / 3.6);
    for (let i = 0; i < 360; i += 0.5) {
      if (i === c) c += el[++k]?.value;
      this.productProfile.angle.push({
        angle: i,
        color: el[k]?.color,
        value: Math.round(el[k]?.value / 3.6),
        title: el[k]?.title,
        displayValue: el[k]?.displayValue,
      });
    }
  };
  // --END--
}
