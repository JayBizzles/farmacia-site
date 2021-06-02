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
    "image": '../../assets/img/Hierbas/Hierbas_Incienso_y_Aceites_Eseciales_2.jpg'
  },
  {
    "image": '../../assets/img/Hierbas/Hierbas_Incienso_y_Aceites_Eseciales_4.jpg'
  }
]
}
