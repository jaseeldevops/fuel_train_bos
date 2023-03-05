import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-page',
  templateUrl: './nav-page.component.html',
  styleUrls: ['./nav-page.component.css'],
})
export class NavPageComponent implements OnInit {
  @Input() title: any;
  @Input() items: any;
  @Input() onClick: any;
  @Input() type: any;
  constructor() {}

  ngOnInit(): void {}

  // The following function will decide what shoul happen when any of the sub option in the side bar is clicked
  onSubPathClick = (it: any) => {
    this.onClick(it);
    let url = `home/${window.location.pathname.split('/')[2]}/${it.path}`;
    window.history.replaceState('HOME', 'HOME', url);
  };
}
