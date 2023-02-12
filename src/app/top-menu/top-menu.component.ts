import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.less']
})
export class TopMenuComponent implements OnInit {
  @Input('color') color: boolean = false;

  public likedMenu: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public openMenu() {
    this.likedMenu = !this.likedMenu;
  }

}
