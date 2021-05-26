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
    "image": '../../assets/img/Hierbas/Hierbas_1.jpg'
  },
  {
    "image": '../../assets/img/Hierbas/Hierbas+2.jpg'
  },
  {
    "image": '../../assets/img/Hierbas/Hierbas_3.jpg'
  },
  {
    "image": '../../assets/img/Hierbas/Hierbas_4.jpg'
  },
  {
    "image": '../../assets/img/Hierbas/Hierbas_5.jpg'
  },
  {
    "image": '../../assets/img/Hierbas/Hierbas_6.jpg'
  },
]
}
