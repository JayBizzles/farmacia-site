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
    "image": '../../assets/img/Miscellaneous/Miscellaneous 1.JPG'
  },
  {
    "image": '../../assets/img/Miscellaneous/Miscellaneous 2.JPG'
  },
  {
    "image": '../../assets/img/Miscellaneous/Miscellaneous 3.jpg'
  },
  {
    "image": '../../assets/img/Miscellaneous/Miscellaneous 4.JPG'
  },
  {
    "image": '../../assets/img/Miscellaneous/Miscellaneous 5 .JPG'
  },
  {
    "image": '../../assets/img/Miscellaneous/Miscellaneous 6.JPG'
  },
  {
    "image": '../../assets/img/Miscellaneous/Miscellaneous 7.JPG'
  },
  {
    "image": '../../assets/img/Miscellaneous/Miscellaneous 8.JPG'
  },
  {
    "image": '../../assets/img/Miscellaneous/Miscellaneous 9.JPG'
  },
  {
    "image": '../../assets/img/Miscellaneous/Miscellaneous 10.JPG'
  },]

}
