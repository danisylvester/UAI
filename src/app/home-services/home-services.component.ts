import { Component, HostListener, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-home-services',
  templateUrl: './home-services.component.html',
  styleUrls: ['./home-services.component.scss']
})

export class HomeServicesComponent {
  // tslint:disable-next-line: typedef
  // @HostListener('window:scroll', ['$event']) onScroll(e) {
  //     this.fadeIn('oilText');
  //     this.fadeIn('preciousMetalText');
  // }

  // private fadeIn(id: string) {
  //   const el = document.getElementById(id);
  //   const viewed = this.elementInViewport(el);
  //   if (viewed) {
  //     if (!el.classList.contains('fadeInText')) {
  //       el.classList.add('fadeInText');
  //     }
  //   }
  // }

  // // tslint:disable-next-line: typedef
  // private elementInViewport(el: any) {

  //   // Special bonus for those using jQuery
  //   if (typeof $ === 'function' && el instanceof $) {
  //     el = el[0];
  //   }
  //   var rect;
  //   try {
  //     rect = el.getBoundingClientRect();
  //   } catch (e) {
  //     return true;
  //   }
  //   console.log("");
  //   console.log("bottom " + rect.bottom + "<=" + " innerHeight " + window.innerHeight);
  //   console.log("top " + rect.top + "<=" + " innerHeight " + window.innerHeight);
  //   console.log("right " + rect.right + "<=" + " innerWidth " + window.innerWidth);
  //   console.log("left " + rect.left);

  //   return (
  //     rect.top >= 0 &&
  //     rect.left >= 0 &&
  //     rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /* or $(window).height() */
  //     rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
  //   );
  // }

  // public isNotMobile: boolean = true;

  // constructor() { }
  // ngOnInit(): void {
  //   if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
  //     console.log("you're on mobile");
  //     this.isNotMobile = false;
  //   }else{
  //     console.log("you're not on mobile");
  //   }
  // }
}
