import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent implements OnInit {
  posts = [
    '/assets/images/social/social_1.jpg',
    '/assets/images/social/social_2.jpg',
    '/assets/images/social/social_3.jpg',
    '/assets/images/social/social_4.jpg',
    '/assets/images/social/social_5.jpg',
    '/assets/images/social/social_6.jpg',
    '/assets/images/social/social_7.jpg',
    '/assets/images/social/social_8.jpg',
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
