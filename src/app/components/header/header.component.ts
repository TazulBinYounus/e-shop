import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  showProductCategoryMenu: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.showProductCategoryMenu = true
  }
}
