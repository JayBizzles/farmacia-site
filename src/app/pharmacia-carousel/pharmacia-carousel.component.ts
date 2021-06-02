import { Component, OnInit } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from 'ng-mat-carousel';

@Component({
  selector: 'app-pharmacia-carousel',
  templateUrl: './pharmacia-carousel.component.html',
  styleUrls: ['./pharmacia-carousel.component.scss']
})
export class PharmaciaCarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  slides = [
    {
    "image": '../../assets/img/Farmacia-Intro/Farmacia_1.jpg'
  },
  {
    "image": '../../assets/img/Farmacia-Intro/Farmacia_2.jpg'
  },
  {
    "image": '../../assets/img/Farmacia-Intro/Farmacia_Inside.jpg'
  }
  ]
}
