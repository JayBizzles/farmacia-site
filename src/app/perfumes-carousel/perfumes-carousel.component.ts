import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfumes-carousel',
  templateUrl: './perfumes-carousel.component.html',
  styleUrls: ['./perfumes-carousel.component.scss']
})
export class PerfumesCarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  slides = [
    {
    "image": '../../assets/img/perfumes-men/All_Men.jpg'
  },
  {
    "image": '../../assets/img/perfumes-women/All_Women.jpg'
  },
 ]
}
