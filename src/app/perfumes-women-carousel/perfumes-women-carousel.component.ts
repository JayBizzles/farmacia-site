import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfumes-women-carousel',
  templateUrl: './perfumes-women-carousel.component.html',
  styleUrls: ['./perfumes-women-carousel.component.scss']
})
export class PerfumesWommenCarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  slides = [
    {
      "image": '../../assets/img/perfumes-women/Women_1.jpg'
    },
    {
      "image": '../../assets/img/perfumes-women/Women_2.jpg'
    },
    {
      "image": '../../assets/img/perfumes-women/Women_3.jpg'
    },
    {
      "image": '../../assets/img/perfumes-women/Women_4.jpg'
    },
    {
      "image": '../../assets/img/perfumes-women/Women_5.jpg'
    },
    {
      "image": '../../assets/img/perfumes-women/Women_6.jpg'
    },
    {
      "image": '../../assets/img/perfumes-women/Women_7.jpg'
    },
  ]
}
