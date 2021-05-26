import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acerca-carousel',
  templateUrl: './acerca-carousel.component.html',
  styleUrls: ['./acerca-carousel.component.scss']
})
export class AcercaCarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  slides = [
    {
    "image": '../../assets/img/Religioso/Purisima_4.jpg'
  },
  {
    "image": '../../assets/img/Religioso/Religioso_1.jpg'
  },
  {
    "image": '../../assets/img/Religioso/Religioso_2.jpg'
  },
  {
    "image": '../../assets/img/Religioso/Religioso_6.jpg'
  },
  {
    "image": '../../assets/img/Religioso/Religioso_5.jpg'
  },
  {
    "image": '../../assets/img/Religioso/Religioso_8.jpg'
  },
  {
    "image": '../../assets/img/Religioso/Religioso_9.jpg'
  },
  {
    "image": '../../assets/img/Religioso/Religioso_10.jpg'
  }]

}


