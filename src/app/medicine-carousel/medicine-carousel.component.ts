import { Component, OnInit } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';



@Component({
  selector: 'app-medicine-carousel',
  templateUrl: './medicine-carousel.component.html',
  styleUrls: ['./medicine-carousel.component.scss']
})
export class MedicineCarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  slides = [
    {
    "image": '../../assets/img/Miscellaneous/Miscellaneous_1.jpg'
  },
  {
    "image": '../../assets/img/Miscellaneous/Miscellaneous_2.jpg'
  },
  {
    "image": '../../assets/img/Miscellaneous/Miscellaneous_3.jpg'
  },
  {
    "image": '../../assets/img/Miscellaneous/Miscellaneous_4.jpg'
  },
  {
    "image": '../../assets/img/Miscellaneous/Miscellaneous_5.jpg'
  },
  {
    "image": '../../assets/img/Miscellaneous/Miscellaneous_6.jpg'
  },
  {
    "image": '../../assets/img/Miscellaneous/Miscellaneous_7.jpg'
  },
  {
    "image": '../../assets/img/Miscellaneous/Miscellaneous_8.jpg'
  },
  {
    "image": '../../assets/img/Miscellaneous/Miscellaneous_9.jpg'
  },
  {
    "image": '../../assets/img/Miscellaneous/Miscellaneous_10.jpg'
  },]

}
