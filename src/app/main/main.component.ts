import { Component, OnInit, OnDestroy } from '@angular/core';
import { ScrollService } from '../shared/services/scroll.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {

  constructor(private scrollService: ScrollService) { }

  ngOnInit(): void {
    window.addEventListener('scroll', this.scroll, true);
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.scroll, true);
  }

  scroll = (event: any): void => {
    if (window.scrollY > 609) {
      this.scrollService.setIsPastScrollPosition(true);
    } else {
      this.scrollService.setIsPastScrollPosition(false);
    }
  };

}
