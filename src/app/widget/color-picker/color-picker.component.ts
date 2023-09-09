import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ColorPicker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css'],
})
export class ColorPickerComponent implements OnInit {
  @Input() onSelect: any;

  showColors: boolean = false;
  selected = '';

  constructor() {}

  onClickColor = (c: string) => {
    this.onSelect(c);
    this.selected = c;
    this.showColors = false;
  };

  ngOnInit(): void {}
}
