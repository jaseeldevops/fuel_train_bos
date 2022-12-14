import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css'],
})
export class ToastComponent implements OnInit {
  @Input() msg: any;
  
  ngOnChanges() {
    if (this.msg !== null) setTimeout(() => (this.msg = null), 3500);
  }

  ngOnInit(): void {}
}
