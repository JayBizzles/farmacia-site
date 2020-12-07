import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hierbas-carousel',
  templateUrl: './hierbas-carousel.component.html',
  styleUrls: ['./hierbas-carousel.component.scss']
})
export class HierbasCarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  slides = [
    {
    "image": '../../assets/img/Hierbas/Hierbas 1.jpg'
  },
  {
    "image": '../../assets/img/Hierbas/Hierbas 2.jpg'
  },
  {
    "image": '../../assets/img/Hierbas/Hierbas 3.jpg'
  },
  {
    "image": '../../assets/img/Hierbas/Hierbas 4.jpg'
  },
  {
    "image": '../../assets/img/Hierbas/Hierbas 5.jpg'
  },
  {
    "image": '../../assets/img/Hierbas/Hierbas 6.jpg'
  },
]
}
