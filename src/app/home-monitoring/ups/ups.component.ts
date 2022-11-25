import { Component, OnInit } from '@angular/core';
import { allUpsDummy } from '../dummy_data';

@Component({
  selector: 'app-ups',
  templateUrl: './ups.component.html',
  styleUrls: ['./ups.component.css'],
})
export class UpsComponent implements OnInit {
  constructor() {}

  allUps: any = [];

  ngOnInit(): void {
    this.allUps = allUpsDummy;
  }
}
