import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfumes-men-carousel',
  templateUrl: './perfumes-men-carousel.component.html',
  styleUrls: ['./perfumes-men-carousel.component.scss']
})
export class PerfumesMenCarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  slides = [
    {
      "image": '../../assets/img/perfumes-men/Men Perfumes 1.jpg'
    },
    {
      "image": '../../assets/img/perfumes-men/Men Perfumes 2.jpg'
    },
    {
      "image": '../../assets/img/perfumes-men/Men Perfumes 3.jpg'
    },
    {
      "image": '../../assets/img/perfumes-men/Men Perfumes 5.jpg'
    }
  ]

}
