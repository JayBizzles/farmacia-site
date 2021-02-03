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
      "image": '../../assets/img/perfumes-women/Women 1.jpg'
    },
    {
      "image": '../../assets/img/perfumes-women/Women 2.jpg'
    },
    {
      "image": '../../assets/img/perfumes-women/Women 3.jpg'
    },
    {
      "image": '../../assets/img/perfumes-women/Women 4.jpg'
    },
    {
      "image": '../../assets/img/perfumes-women/Women 5.jpg'
    },
    {
      "image": '../../assets/img/perfumes-women/Women 6.jpg'
    },
    {
      "image": '../../assets/img/perfumes-women/Women 7.jpg'
    },
  ]
}
