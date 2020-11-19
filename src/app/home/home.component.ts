import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { map, catchError, single, timeout } from 'rxjs/operators';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public state: any;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const stateData = history.state.subRoute;
    function scrollToOffset(elID: string): void{
      const el = document.getElementById(elID);
      const elOffset = 60;
      const elPosition = el.getBoundingClientRect().top;
      const offsetPosition = elPosition - elOffset;

      window.scrollBy({
           top: offsetPosition,
           behavior: 'smooth'
      });
    }

    scrollToOffset(stateData);

  }

}
