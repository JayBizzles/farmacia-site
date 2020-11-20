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
    "image": '../../assets/img/Religioso/Purisma 4.JPG'
  },
  {
    "image": '../../assets/img/Religioso/Religioso 1.JPG'
  },
  {
    "image": '../../assets/img/Religioso/Religioso 2.jpg'
  },
  {
    "image": '../../assets/img/Religioso/Religioso 6.JPG'
  },
  {
    "image": '../../assets/img/Religioso/Religioso 5.JPG'
  },
  {
    "image": '../../assets/img/Religioso/Religioso 8.JPG'
  },
  {
    "image": '../../assets/img/Religioso/Religioso 9.JPG'
  },
  {
    "image": '../../assets/img/Religioso/Religioso 10.JPG'
  },]

}


