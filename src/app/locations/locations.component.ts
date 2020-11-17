import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { DOCUMENT, getLocaleDateFormat } from '@angular/common';


declare var $: any;

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {

  public highlight: boolean = false;

  public loc1(inViewPort: boolean): void{
    if (inViewPort){
      console.log('hi loc1');
    }
    else{
      console.log('bye loc1');
    }
  }

  public loc2(inViewPort: boolean): void{
    if (inViewPort){
      console.log('hi loc2');
    }
    else{
      console.log('bye loc2');
    }
  }

  public loc3(inViewPort: boolean): void{
   
  }

  public loc4(inViewPort: boolean): void{
   
  }

  public loc5(inViewPort: boolean): void{
   
  }

  public loc6(inViewPort: boolean): void{

  }



  constructor() {
    
  }

  ngOnInit(): void {

  }
}

