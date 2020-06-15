import { Component, OnInit } from '@angular/core';
import { faHamburger } from '@fortawesome/free-solid-svg-icons';
import { faTwitterSquare, faFacebookSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  faHamburger = faHamburger;
  faTwitter = faTwitterSquare;
  faFacebook = faFacebookSquare;
  faInstagram = faInstagramSquare;
  constructor() { }

  ngOnInit(): void {
  }

}
