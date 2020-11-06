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
@Component({
  selector: 'app-miscelanos-grid',
  templateUrl: './miscelanos-grid.component.html',
  styleUrls: ['./miscelanos-grid.component.scss']
})
export class MiscelanosGridComponent implements OnInit {

  data: Card[] = [
    {
      title: 'medicine1',
      subtitle: 'medicine',
      text: 'Descriptions',
      url: "../../assets/img/medicine-pics/Black Cohosh.JPG",
      price: '$100'
    },
    {
      title: 'medicine2',
      subtitle: 'medicine',
      text: 'Descriptions',
      url: "../../assets/img/medicine-pics/Brain-Protex.JPG",
      price: '$100'
    },
    {
      title: 'medicine3',
      subtitle: 'medicine',
      text: 'Descriptions',
      price: '$100',
      url:"../../assets/img/medicine-pics/Brain-Protex.JPG"
    },
    {
      title: 'medicine4',
      subtitle: 'medicine',
      text: 'Descriptions',
      price: '$100',
      url:"../../assets/img/medicine-pics/Brain-Protex.JPG"
    },
    {
      title: 'medicine5',
      subtitle: 'medicine',
      text: 'Descriptions',
      price: '$100',
      url:"../../assets/img/medicine-pics/Brain-Protex.JPG"
    },
    {
      title: 'medicine6',
      subtitle: 'medicine',
      text: 'Descriptions',
      price: '$100',
      url:"../../assets/img/medicine-pics/Brain-Protex.JPG"
    },
    {
      title: 'medicine7',
      subtitle: 'medicine',
      text: 'Descriptions',
      price: '$100',
      url:"../../assets/img/medicine-pics/Brain-Protex.JPG"
    },
    {
      title: 'medicine8',
      subtitle: 'medicine',
      text: 'Descriptions',
      price: '$100',
      url:"../../assets/img/medicine-pics/Brain-Protex.JPG"
    },
    {
      title: 'medicine9',
      subtitle: 'medicine',
      text: 'Descriptions',
      price: '$100',
      url:"../../assets/img/medicine-pics/Brain-Protex.JPG"
    },
    {title: 'medicine10',
    subtitle: 'medicine',
    text: 'Descriptions',
    price: '$100',
    url:"../../assets/img/medicine-pics/Brain-Protex.JPG"
  },
  // {title: 'medicine 11',
  //   subtitle: 'medicine',
  //   text: 'Descriptions',
  //   price: '$100',
  //   url:"../../assets/img/medicine-pics/Brain-Protex.JPG"
  // },
  // {title: 'medicine 12',
  //   subtitle: 'medicine',
  //   text: 'Descriptions',
  //   price: '$100',
  //   url:"../../assets/img/medicine-pics/Brain-Protex.JPG"
  // },
  // {title: 'medicine 13',
  //   subtitle: 'medicine',
  //   text: 'Descriptions',
  //   price: '$100',
  //   url:"../../assets/img/medicine-pics/Brain-Protex.JPG"
  // },
  // {title: 'medicine 14',
  //   subtitle: 'medicine',
  //   text: 'Descriptions',
  //   price: '$100',
  //   url:"../../assets/img/medicine-pics/Brain-Protex.JPG"
  // },
  // {title: 'medicine 15',
  //   subtitle: 'medicine',
  //   text: 'Descriptions',
  //   price: '$100',
  //   url:"../../assets/img/medicine-pics/Brain-Protex.JPG"
  // },
  // {title: 'medicine 16',
  //   subtitle: 'medicine',
  //   text: 'Descriptions',
  //   price: '$100',
  //   url:"../../assets/img/medicine-pics/Brain-Protex.JPG"
  // }
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  obs: Observable<any>;
  dataSource: MatTableDataSource<Card> = new MatTableDataSource<Card>(this.data);

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
