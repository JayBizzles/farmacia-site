
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
    url: "../../assets/img/Hierbas/Alpiste .jpg",
    price: '$100'
  },
  {
    title: 'Boldo',
    subtitle: 'herb',
    text: 'Descriptions',
    url: "../../assets/img/Hierbas/Boldo.jpg",
    price: '$100'
  },
  {
    title: 'Cascara Sagrada',
    subtitle: 'herb',
    text: 'Descriptions',
    url: "../../assets/img/Hierbas/Cascara Sagrada.jpg",
    price: '$100'
  },
  {
    title: 'Cornsilk',
    subtitle: 'herb',
    text: 'Descriptions',
    url: "../../assets/img/Hierbas/Cornsilk.jpg",
    price: '$100'
  },
  {
    title: 'Flaxseed',
    subtitle: 'herb',
    text: 'Descriptions',
    url: "../../assets/img/Hierbas/Flaxseed.jpg",
    price: '$100'
  },
  {
    title: 'Lavdander',
    subtitle: 'herb',
    text: 'Descriptions',
    url: "../../assets/img/Hierbas/Lavdander.jpg",
    price: '$100'
  },
  {
    title: 'MACA',
    subtitle: 'herb',
    text: 'Descriptions',
    url: "../../assets/img/Hierbas/MACA.jpg",
    price: '$100'
  },
  {
    title: 'Moringa Powder',
    subtitle: 'herb',
    text: 'Descriptions',
    url: "../../assets/img/Hierbas/Moringa Powder.jpg",
    price: '$100'
  },
  {
    title: 'Organic Bitter Melon Fruit',
    subtitle: 'herb',
    text: 'Descriptions',
    url: "../../assets/img/Hierbas/Organic Bitter Melon Fruit.jpg",
    price: '$100'
  },
  {
    title: 'Organic Bitter Melon Powder',
    subtitle: 'herb',
    text: 'Descriptions',
    url: "../../assets/img/Hierbas/Organic Bitter Melon Powder.jpg",
    price: '$100'
  },
  {
    title: 'Organic Black Seed',
    subtitle: 'herb',
    text: 'Descriptions',
    url: "../../assets/img/Hierbas/Organic Black Seed.jpg",
    price: '$100'
  },
  {
    title: 'Organic Cardo Mariano',
    subtitle: 'herb',
    text: 'Descriptions',
    url: "../../assets/img/Hierbas/Organic Cardo Mariano.jpg",
    price: '$100'
  },
  {
    title: 'Organic Cinnamon Powder',
    subtitle: 'herb',
    text: 'Descriptions',
    url: "../../assets/img/Hierbas/Organic CInnamon Powder.jpg",
    price: '$100'
  },
  {
    title: 'Organic Cola de Caballo',
    subtitle: 'herb',
    text: 'Descriptions',
    url: "../../assets/img/Hierbas/Organic Cola de Caballo.jpg",
    price: '$100'
  },
  {
    title: 'Organic Echinacea Herb',
    subtitle: 'herb',
    text: 'Descriptions',
    url: "../../assets/img/Hierbas/Organic Echinacea Herb.jpg",
    price: '$100'
  },
  {
    title: 'Organic Ginger Root',
    subtitle: 'herb',
    text: 'Descriptions',
    url: "../../assets/img/Hierbas/Organic Ginger Root.jpg",
    price: '$100'
  },
  {
    title: 'Organic Manzanilla',
    subtitle: 'herb',
    text: 'Descriptions',
    url: "../../assets/img/Hierbas/Organic Manzanilla.jpg",
    price: '$100'
  },
  {
    title: 'Organic Moringa Leaf Powder',
    subtitle: 'herb',
    text: 'Descriptions',
    url: "../../assets/img/Hierbas/Organic Moringa Leaf Powder.jpg",
    price: '$100'
  },
  {
    title: 'Organic Moringa Seed',
    subtitle: 'herb',
    text: 'Descriptions',
    url: "../../assets/img/Hierbas/Organic Moringa Seed.jpg",
    price: '$100'
  },
  {
    title: 'Organic Semillas De Cardo Mariano',
    subtitle: 'herb',
    text: 'Descriptions',
    url: "../../assets/img/Hierbas/Organic Semillas De Cardo Mariano .jpg",
    price: '$100'
  },
  {
    title: 'Organic Superfood Chia Seed',
    subtitle: 'herb',
    text: 'Descriptions',
    url: "../../assets/img/Hierbas/Organic Superfood Chia Seed.jpg",
    price: '$100'
  },
  {
    title: 'Organic Turmeric Root Powder',
    subtitle: 'herb',
    text: 'Descriptions',
    url: "../../assets/img/Hierbas/Organic Turmeric Root Powder .jpg",
    price: '$100'
  },
  {
    title: 'Organic Turmeric Root',
    subtitle: 'herb',
    text: 'Descriptions',
    url: "../../assets/img/Hierbas/Organic Turmeric Root.jpg",
    price: '$100'
  },
  {
    title: 'Poppy Seed',
    subtitle: 'herb',
    text: 'Descriptions',
    url: "../../assets/img/Hierbas/Poppy Seed.jpg",
    price: '$100'
  },
  {
    title: 'Rosemary',
    subtitle: 'herb',
    text: 'Descriptions',
    url: "../../assets/img/Hierbas/Rosemary.jpg",
    price: '$100'
  },
  {
    title: 'Senna Leaf',
    subtitle: 'herb',
    text: 'Descriptions',
    url: "../../assets/img/Hierbas/Senna Leaf .jpg",
    price: '$100'
  },
  {
    title: 'Virgin-Organic Black Seed',
    subtitle: 'herb',
    text: 'Descriptions',
    url: "../../assets/img/Hierbas/Virgin-Organic Black Seed.jpg",
    price: '$100'
  },
  {
    title: '',
    subtitle: 'herb',
    text: 'Descriptions',
    url: "../../assets/img/Hierbas/Hierbas, Incienso y Aceites Eseciales 1.jpeg",
    price: '$100'
  },
  {
    title: '',
    subtitle: 'herb',
    text: 'Descriptions',
    url: "../../assets/img/Hierbas/Hierbas, Incienso y Aceites Eseciales 2.jpeg",
    price: '$100'
  },
  {
    title: '',
    subtitle: 'herb',
    text: 'Descriptions',
    url: "../../assets/img/Hierbas/Hierbas, Incienso y Aceites Eseciales 3.jpeg",
    price: '$100'
  },
  {
    title: '',
    subtitle: 'herb',
    text: 'Descriptions',
    url: "../../assets/img/Hierbas/Hierbas, Incienso y Aceites Eseciales 4.jpeg",
    price: '$100'
  },
  {
    title: '',
    subtitle: 'herb',
    text: 'Descriptions',
    url: "../../assets/img/Hierbas/Hierbas, Incienso y Aceites Eseciales 5.jpeg",
    price: '$100'
  },
  {
    title: '',
    subtitle: 'herb',
    text: 'Descriptions',
    url: "../../assets/img/Hierbas/Hierbas, Incienso y Aceites Esenciales 6-min.jpg",
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
