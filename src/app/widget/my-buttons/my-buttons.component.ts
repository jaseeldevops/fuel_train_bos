import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'MyButtons',
  templateUrl: './my-buttons.component.html',
  styleUrls: ['./my-buttons.component.css'],
})
export class MyButtonsComponent implements OnInit {
  @Input() onSelect: any;
  @Input() type: any;
  @Input() label: any;
  @Input() dropList: any;

  isSwitchOn: boolean = false;
  selected: boolean = false;

  onClickSwitch = () => {
    this.isSwitchOn = !this.isSwitchOn;
    this.onSelect(this.isSwitchOn);
  };

  onSelectItem = (it: any) => {
    this.selected = !this.selected;
    this.onSelect(it);
  };

  constructor() {}

  ngOnInit(): void {}
}
