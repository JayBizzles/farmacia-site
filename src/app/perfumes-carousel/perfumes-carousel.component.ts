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
    "image": '../../assets/img/perfumes-men/All Men.JPG'
  },
  {
    "image": '../../assets/img/perfumes-women/All Women.JPG'
  },
 ]
}
