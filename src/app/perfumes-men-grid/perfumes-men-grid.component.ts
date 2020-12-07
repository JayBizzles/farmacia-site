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
    title: '4711',
    subtitle: 'perfume',
    text: 'Descriptions',
    url: "../../assets/img/perfumes-men/4711 (1).jpg",
    price: '$100'
  },
  {
    title: 'Agua Brava',
    subtitle: 'perfume',
    text: 'Descriptions',
    url: "../../assets/img/perfumes-men/Agua Brava 1.jpg",
    price: '$100'
  },
  {
    title: 'Azarro',
    subtitle: 'perfume',
    text: 'Descriptions',
    url: "../../assets/img/perfumes-men/Azarro 1.jpg",
    price: '$100'
  },
  {
    title: 'Carolina Herrera Men',
    subtitle: 'perfume',
    text: 'Descriptions',
    url: "../../assets/img/perfumes-men/Carolina Herrera Men 1.jpg",
    price: '$100'
  },
  {
    title: 'Davidoff',
    subtitle: 'perfume',
    text: 'Descriptions',
    url: "../../assets/img/perfumes-men/Davidoff 1.jpg",
    price: '$100'
  },
  {
    title: 'Dolce _ Gabbana',
    subtitle: 'perfume',
    text: 'Descriptions',
    url: "../../assets/img/perfumes-men/Dolce _ Gabbana 1.jpg",
    price: '$100'
  },
  {
    title: 'Hugo Boss',
    subtitle: 'perfume',
    text: 'Descriptions',
    url: "../../assets/img/perfumes-men/Hugo Boss 1.jpg",
    price: '$100'
  },
  {
    title: 'Lacoste',
    subtitle: 'perfume',
    text: 'Descriptions',
    url: "../../assets/img/perfumes-men/Lacoste 1.jpg",
    price: '$100'
  },
  {
    title: 'Mont Blanc',
    subtitle: 'perfume',
    text: 'Descriptions',
    url: "../../assets/img/perfumes-men/Mont Blanc 1.jpg",
    price: '$100'
  },
  {
    title: 'Obsession',
    subtitle: 'perfume',
    text: 'Descriptions',
    url: "../../assets/img/perfumes-men/Obsession 1.jpg",
    price: '$100'
  },
  {
    title: 'One Million',
    subtitle: 'perfume',
    text: 'Descriptions',
    url: "../../assets/img/perfumes-men/One Million 1.jpg",
    price: '$100'
  },
  {
    title: 'Versace',
    subtitle: 'perfume',
    text: 'Descriptions',
    url: "../../assets/img/perfumes-men/Versace 1.jpg",
    price: '$100'
  },
  
];

@Component({
  selector: 'app-perfumes-men-grid',
  templateUrl: './perfumes-men-grid.component.html',
  styleUrls: ['./perfumes-men-grid.component.scss']
})
export class PerfumesMenGridComponent implements OnInit {

  

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
