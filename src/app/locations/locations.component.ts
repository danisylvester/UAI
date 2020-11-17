import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { DOCUMENT, getLocaleDateFormat } from '@angular/common';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {

  constructor(
    @Inject(DOCUMENT) private document: Document) { }
    public loc2Selected = false;
    ngOnInit(): void { }
    @HostListener('window:scroll', [])
    onWindowScroll(): void {
    this.scrollSpy();
  }

  public scrollSpy(): void{
    const firstMenuItemTop = document.getElementById('firstMenuItem').offsetTop;
    const menuTitleTop = document.getElementById('menuTitle').offsetTop;
    const idList = ['loc1', 'loc2', 'loc3', 'loc4', 'loc5', 'loc6'];
    idList.forEach(id => {
      const elTop = document.getElementById(id).offsetTop;
      if (elTop === firstMenuItemTop){
        console.log('selected');
        }
    });
  }
}
