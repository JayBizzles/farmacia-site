import { Component, OnInit, OnDestroy, ViewChild, ChangeDetectorRef  } from '@angular/core';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator} from '@angular/material/paginator';

export interface Card {
  title: string;
  subtitle: string;
  text: string;
  price: string;
  url: string;

}

const DATA: Card[] = [
    
  // {
  //   title: 'Alpiste',
  //   subtitle: 'herb',
  //   text: 'Descriptions',
  //   url: "../../assets/img/Miscellaneous/Miscellaneous 1.jpg",
  //   price: '$100'
  // },
  // {
  //   title: 'Boldo',
  //   subtitle: 'herb',
  //   text: 'Descriptions',
  //   url: "../../assets/img/Miscellaneous/Miscellaneous 2.jpg",
  //   price: '$100'
  // },
  // {
  //   title: 'Cascara Sagrada',
  //   subtitle: 'herb',
  //   text: 'Descriptions',
  //   url: "../../assets/img/Miscellaneous/Miscellaneous 3.jpg",
  //   price: '$100'
  // },
  // {
  //   title: 'Cornsilk',
  //   subtitle: 'herb',
  //   text: 'Descriptions',
  //   url: "../../assets/img/Miscellaneous/Miscellaneous 4.jpg",
  //   price: '$100'
  // },
  // {
  //   title: 'Flaxseed',
  //   subtitle: 'herb',
  //   text: 'Descriptions',
  //   url: "../../assets/img/Miscellaneous/Miscellaneous 5.jpg",
  //   price: '$100'
  // },
  // {
  //   title: 'Lavdander',
  //   subtitle: 'herb',
  //   text: 'Descriptions',
  //   url: "../../assets/img/Miscellaneous/Miscellaneous 6.jpg",
  //   price: '$100'
  // },
  // {
  //   title: 'MACA',
  //   subtitle: 'herb',
  //   text: 'Descriptions',
  //   url: "../../assets/img/Miscellaneous/Miscellaneous 7.jpg",
  //   price: '$100'
  // },
  // {
  //   title: 'Moringa Powder',
  //   subtitle: 'herb',
  //   text: 'Descriptions',
  //   url: "../../assets/img/Miscellaneous/Miscellaneous 8.jpg",
  //   price: '$100'
  // },
  // {
  //   title: 'Organic Bitter Melon Fruit',
  //   subtitle: 'herb',
  //   text: 'Descriptions',
  //   url: "../../assets/img/Miscellaneous/Miscellaneous 9.jpg",
  //   price: '$100'
  // },
  // {
  //   title: '',
  //   subtitle: 'herb',
  //   text: 'Descriptions',
  //   url: "../../assets/img/Miscellaneous/Miscellaneous 10.jpg",
  //   price: '$100'
  // },
  {
    title: '',
    subtitle: 'herb',
    text: 'Descriptions',
    url: "../../assets/img/Miscellaneous/Miscellaneous 1-min.jpg",
    price: '$100'
  },
  {
    title: '',
    subtitle: 'herb',
    text: 'Descriptions',
    url: "../../assets/img/Miscellaneous/Miscellaneous 2-min.jpg",
    price: '$100'
  },
  {
    title: '',
    subtitle: 'herb',
    text: 'Descriptions',
    url: "../../assets/img/Miscellaneous/Miscellaneous 3-min.jpg",
    price: '$100'
  },
  {
    title: '',
    subtitle: 'herb',
    text: 'Descriptions',
    url: "../../assets/img/Miscellaneous/Miscellaneous 4-min.jpg",
    price: '$100'
  },
  {
    title: '',
    subtitle: 'herb',
    text: 'Descriptions',
    url: "../../assets/img/Miscellaneous/Miscellaneous 5-min.jpg",
    price: '$100'
  }
  
];

@Component({
  selector: 'app-miscellaneous-grid',
  templateUrl: './miscellaneous-grid.component.html',
  styleUrls: ['./miscellaneous-grid.component.scss']
})
export class MiscellaneousGridComponent implements OnInit, OnDestroy  {

  

  @ViewChild(MatPaginator) paginator: MatPaginator;
  obs: Observable<any>;
  dataSource: MatTableDataSource<Card> = new MatTableDataSource<Card>(DATA);

  constructor(private changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.changeDetectorRef.detectChanges();
    this.dataSource.paginator = this.paginator;
    this.obs = this.dataSource.connect();
  }

  ngOnDestroy() {
    if (this.dataSource) { 
      this.dataSource.disconnect(); 
    }
  }


}
