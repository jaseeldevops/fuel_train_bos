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
  @Input() onClickDownload: any;
  @Input() onClickUpload: any;

  isSwitchOn: boolean = false;
  selected: boolean = false;
  isExlConfirmPopup: boolean = false;
  uploadedFile: any;

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

  onClickUploadInput = () => {
    const upInput = document.getElementById('exlUpldInput');
    upInput?.click();
  };
  onSelectFile = (event: any) => {    
    this.uploadedFile = event.target.files[0]
  };
  onUploadFile = () => {
    this.isExlConfirmPopup = true;
  };
  onClickConfirmFile = () => {
    this.onClickUpload(this.uploadedFile);
  };
}
