import { Component, OnInit } from '@angular/core';

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
    "image": '../../assets/img/Farmacia Intro/Farmacia 1.jpg'
  },
  {
    "image": '../../assets/img/Farmacia Intro/Farmacia 2.jpg'
  },
  {
    "image": '../../assets/img/Farmacia Intro/Farmacia Inside.jpg'
  }
  ]
}
