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

  // tslint:disable-next-line: typedef
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

  //   return (
  //     rect.top >= 0 &&
  //     rect.left >= 0 &&
  //     rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /* or $(window).height() */
  //     rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
  //   );
  // }
}
