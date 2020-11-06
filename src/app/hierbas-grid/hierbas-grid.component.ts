
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
    title: 'Alpiste',
    subtitle: 'herb',
    text: 'Descriptions',
    url: "../../assets/img/Hierbas/Alpiste .JPG",
    price: '$100'
  },
  {
    title: 'Boldo',
    subtitle: 'herb',
    text: 'Descriptions',
    url: "../../assets/img/Hierbas/Boldo.JPG",
    price: '$100'
  },
  {
    title: 'Cascara Sagrada',
    subtitle: 'herb',
    text: 'Descriptions',
    url: "../../assets/img/Hierbas/Cascara Sagrada.JPG",
    price: '$100'
  },
  {
    title: 'Cornsilk',
    subtitle: 'herb',
    text: 'Descriptions',
    url: "../../assets/img/Hierbas/Cornsilk.JPG",
    price: '$100'
  },
  {
    title: 'Flaxseed',
    subtitle: 'herb',
    text: 'Descriptions',
    url: "../../assets/img/Hierbas/Flaxseed.JPG",
    price: '$100'
  },
  {
    title: 'Lavdander',
    subtitle: 'herb',
    text: 'Descriptions',
    url: "../../assets/img/Hierbas/Lavdander.JPG",
    price: '$100'
  },
  {
    title: 'MACA',
    subtitle: 'herb',
    text: 'Descriptions',
    url: "../../assets/img/Hierbas/MACA.JPG",
    price: '$100'
  },
  {
    title: 'Moringa Powder',
    subtitle: 'herb',
    text: 'Descriptions',
    url: "../../assets/img/Hierbas/Moringa Powder.JPG",
    price: '$100'
  },
  {
    title: 'Organic Bitter Melon Fruit',
    subtitle: 'herb',
    text: 'Descriptions',
    url: "../../assets/img/Hierbas/Organic Bitter Melon Fruit.JPG",
    price: '$100'
  },
  {
    title: 'Organic Bitter Melon Powder',
    subtitle: 'herb',
    text: 'Descriptions',
    url: "../../assets/img/Hierbas/Organic Bitter Melon Powder.JPG",
    price: '$100'
  },
  {
    title: 'Organic Black Seed',
    subtitle: 'herb',
    text: 'Descriptions',
    url: "../../assets/img/Hierbas/Organic Black Seed.JPG",
    price: '$100'
  },
  {
    title: 'Organic Cardo Mariano',
    subtitle: 'herb',
    text: 'Descriptions',
    url: "../../assets/img/Hierbas/Organic Cardo Mariano.JPG",
    price: '$100'
  },
  {
    title: 'Organic Cinnamon Powder',
    subtitle: 'herb',
    text: 'Descriptions',
    url: "../../assets/img/Hierbas/Organic CInnamon Powder.JPG",
    price: '$100'
  },
  {
    title: 'Organic Cola de Caballo',
    subtitle: 'herb',
    text: 'Descriptions',
    url: "../../assets/img/Hierbas/Organic Cola de Caballo.JPG",
    price: '$100'
  },
  {
    title: 'Organic Echinacea Herb',
    subtitle: 'herb',
    text: 'Descriptions',
    url: "../../assets/img/Hierbas/Organic Echinacea Herb.JPG",
    price: '$100'
  },
  {
    title: 'Organic Ginger Root',
    subtitle: 'herb',
    text: 'Descriptions',
    url: "../../assets/img/Hierbas/Organic Ginger Root.JPG",
    price: '$100'
  },
  {
    title: 'Organic Manzanilla',
    subtitle: 'herb',
    text: 'Descriptions',
    url: "../../assets/img/Hierbas/Organic Manzanilla.JPG",
    price: '$100'
  },
  {
    title: 'Organic Moringa Leaf Powder',
    subtitle: 'herb',
    text: 'Descriptions',
    url: "../../assets/img/Hierbas/Organic Moringa Leaf Powder.JPG",
    price: '$100'
  },
  {
    title: 'Organic Moringa Seed',
    subtitle: 'herb',
    text: 'Descriptions',
    url: "../../assets/img/Hierbas/Organic Moringa Seed.JPG",
    price: '$100'
  },
  {
    title: 'Organic Semillas De Cardo Mariano',
    subtitle: 'herb',
    text: 'Descriptions',
    url: "../../assets/img/Hierbas/Organic Semillas De Cardo Mariano .JPG",
    price: '$100'
  },
  {
    title: 'Organic Superfood Chia Seed',
    subtitle: 'herb',
    text: 'Descriptions',
    url: "../../assets/img/Hierbas/Organic Superfood Chia Seed.JPG",
    price: '$100'
  },
  {
    title: 'Organic Turmeric Root Powder',
    subtitle: 'herb',
    text: 'Descriptions',
    url: "../../assets/img/Hierbas/Organic Turmeric Root Powder .JPG",
    price: '$100'
  },
  {
    title: 'Organic Turmeric Root',
    subtitle: 'herb',
    text: 'Descriptions',
    url: "../../assets/img/Hierbas/Organic Turmeric Root.JPG",
    price: '$100'
  },
  {
    title: 'Poppy Seed',
    subtitle: 'herb',
    text: 'Descriptions',
    url: "../../assets/img/Hierbas/Poppy Seed.JPG",
    price: '$100'
  },
  {
    title: 'Rosemary',
    subtitle: 'herb',
    text: 'Descriptions',
    url: "../../assets/img/Hierbas/Rosemary.JPG",
    price: '$100'
  },
  {
    title: 'Senna Leaf',
    subtitle: 'herb',
    text: 'Descriptions',
    url: "../../assets/img/Hierbas/Senna Leaf .JPG",
    price: '$100'
  },
  {
    title: 'Virgin-Organic Black Seed',
    subtitle: 'herb',
    text: 'Descriptions',
    url: "../../assets/img/Hierbas/Virgin-Organic Black Seed.JPG",
    price: '$100'
  },
  
];

@Component({
  selector: 'app-hierbas-grid',
  templateUrl: './hierbas-grid.component.html',
  styleUrls: ['./hierbas-grid.component.scss']
})
export class HierbasGridComponent implements OnInit, OnDestroy  {

  

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
