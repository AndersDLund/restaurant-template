import { Component, OnInit } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  changeNavPosition: boolean = false;
  faBars =faBars;

  constructor(private scrollService: ScrollService) {
    this.scrollService.isPastScrollPosition.subscribe((value: boolean) => {
      this.changeNavPosition = value;
    })
  }

  ngOnInit(): void {

  }

}
