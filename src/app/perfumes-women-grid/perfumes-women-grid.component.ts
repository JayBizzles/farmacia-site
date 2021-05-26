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
    title: 'Bvlgari',
    subtitle: 'perfume',
    text: 'Descriptions',
    url: "../../assets/img/perfumes-women/Bvlgari_1.jpg",
    price: '$100'
  },
  {
    title: 'Calvin Klein',
    subtitle: 'perfume',
    text: 'Descriptions',
    url: "../../assets/img/perfumes-women/Calvin_Klein_1.jpg",
    price: '$100'
  },
  {
    title: 'Carolina Herrera',
    subtitle: 'perfume',
    text: 'Descriptions',
    url: "../../assets/img/perfumes-women/Carolina_Herrera_1.jpg",
    price: '$100'
  },
  {
    title: 'Dolce & Gabanna',
    subtitle: 'perfume',
    text: 'Descriptions',
    url: "../../assets/img/perfumes-women/Dolce_Gabanna 1.jpg",
    price: '$100'
  },
  {
    title: 'Givenchy',
    subtitle: 'perfume',
    text: 'Descriptions',
    url: "../../assets/img/perfumes-women/Givenchy_1.jpg",
    price: '$100'
  },
  {
    title: 'Gucci',
    subtitle: 'perfume',
    text: 'Descriptions',
    url: "../../assets/img/perfumes-women/Gucci_1.jpg",
    price: '$100'
  },
  {
    title: 'JLO',
    subtitle: 'perfume',
    text: 'Descriptions',
    url: "../../assets/img/perfumes-women/JLO_1.jpg",
    price: '$100'
  },
  {
    title: 'Lancome',
    subtitle: 'perfume',
    text: 'Descriptions',
    url: "../../assets/img/perfumes-women/Lancome_1.jpg",
    price: '$100'
  },
  {
    title: 'Paris Hilton',
    subtitle: 'perfume',
    text: 'Descriptions',
    url: "../../assets/img/perfumes-women/Paris_Hilton_1.jpg",
    price: '$100'
  },
  {
    title: 'Ralph Lauren',
    subtitle: 'perfume',
    text: 'Descriptions',
    url: "../../assets/img/perfumes-women/Ralph_Lauren_2.jpg",
    price: '$100'
  },
  {
    title: 'Versace',
    subtitle: 'perfume',
    text: 'Descriptions',
    url: "../../assets/img/perfumes-women/Versace_1.jpg",
    price: '$100'
  }
  
];

@Component({
  selector: 'app-perfumes-women-grid',
  templateUrl: './perfumes-women-grid.component.html',
  styleUrls: ['./perfumes-women-grid.component.scss']
})
export class PerfumesWomenGridComponent implements OnInit, OnDestroy {

  
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
