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
  {
    title: '',
    subtitle: 'religioso',
    text: 'Descriptions',
    url: "../../assets/img/Religioso/Purisima_4.jpg",
    price: '$100'
  },
  {
    title: '',
    subtitle: 'religioso',
    text: 'Descriptions',
    price: '$100',
    url:"../../assets/img/Religioso/Religioso_1.jpg"
  },
  {
    title: '',
    subtitle: 'religioso',
    text: 'Descriptions',
    price: '$100',
    url:"../../assets/img/Religioso/Religioso_2.jpg"
  },
  {
    title: '',
    subtitle: 'religioso',
    text: 'Descriptions',
    price: '$100',
    url:"../../assets/img/Religioso/Religioso_5.jpg"
  },
  {
    title: '',
    subtitle: 'religioso',
    text: 'Descriptions',
    price: '$100',
    url:"../../assets/img/Religioso/Religioso_6.jpg"
  },
  {
    title: '',
    subtitle: 'religioso',
    text: 'Descriptions',
    price: '$100',
    url:"../../assets/img/Religioso/Religioso_7.jpg"
  },
  {
    title: '',
    subtitle: 'religioso',
    text: 'Descriptions',
    price: '$100',
    url:"../../assets/img/Religioso/Religioso_8.jpg"
  },
  {
    title: '',
    subtitle: 'religioso',
    text: 'Descriptions',
    price: '$100',
    url:"../../assets/img/Religioso/Religioso_9.jpg"
  },
  {title: '',
  subtitle: 'religioso',
  text: 'Descriptions',
  price: '$100',
  url:"../../assets/img/Religioso/Religioso_10.jpg"
}

];
@Component({
  selector: 'app-religioso-grid',
  templateUrl: './religioso-grid.component.html',
  styleUrls: ['./religioso-grid.component.scss']
})
export class ReligiosoGridComponent implements OnInit, OnDestroy {

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
