
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
    url: "../../assets/img/Hierbas/Alpiste.jpg",
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
    url: "../../assets/img/Hierbas/Cascara_Sagrada.jpg",
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
    url: "../../assets/img/Hierbas/Moringa_Powder.jpg",
    price: '$100'
  },
  {
    title: 'Organic Bitter Melon Fruit',
    subtitle: 'herb',
    text: 'Descriptions',
    url: "../../assets/img/Hierbas/Organic_Bitter_Melon_Fruit.jpg",
    price: '$100'
  },
  {
    title: 'Organic Bitter Melon Powder',
    subtitle: 'herb',
    text: 'Descriptions',
    url: "../../assets/img/Hierbas/Organic_Bitter_Melon_Powder.jpg",
    price: '$100'
  },
  {
    title: 'Organic Black Seed',
    subtitle: 'herb',
    text: 'Descriptions',
    url: "../../assets/img/Hierbas/Organic_Black_Seed.jpg",
    price: '$100'
  },
  {
    title: 'Organic Cardo Mariano',
    subtitle: 'herb',
    text: 'Descriptions',
    url: "../../assets/img/Hierbas/Organic_Cardo_Mariano.jpg",
    price: '$100'
  },
  {
    title: 'Organic Cinnamon Powder',
    subtitle: 'herb',
    text: 'Descriptions',
    url: "../../assets/img/Hierbas/Organic_CInnamon_Powder.jpg",
    price: '$100'
  },
  {
    title: 'Organic Cola de Caballo',
    subtitle: 'herb',
    text: 'Descriptions',
    url: "../../assets/img/Hierbas/Organic_Cola_de_Caballo.jpg",
    price: '$100'
  },
  {
    title: 'Organic Echinacea Herb',
    subtitle: 'herb',
    text: 'Descriptions',
    url: "../../assets/img/Hierbas/Organic_Echinacea_Herb.jpg",
    price: '$100'
  },
  {
    title: 'Organic Ginger Root',
    subtitle: 'herb',
    text: 'Descriptions',
    url: "../../assets/img/Hierbas/Organic_Ginger_Root.jpg",
    price: '$100'
  },
  {
    title: 'Organic Manzanilla',
    subtitle: 'herb',
    text: 'Descriptions',
    url: "../../assets/img/Hierbas/Organic_Manzanilla.jpg",
    price: '$100'
  },
  {
    title: 'Organic Moringa Leaf Powder',
    subtitle: 'herb',
    text: 'Descriptions',
    url: "../../assets/img/Hierbas/Organic_Moringa_Leaf_Powder.jpg",
    price: '$100'
  },
  {
    title: 'Organic Moringa Seed',
    subtitle: 'herb',
    text: 'Descriptions',
    url: "../../assets/img/Hierbas/Organic_Moringa_Seed.jpg",
    price: '$100'
  },
  {
    title: 'Organic Semillas De Cardo Mariano',
    subtitle: 'herb',
    text: 'Descriptions',
    url: "../../assets/img/Hierbas/Organic Semillas_De_Cardo_Mariano.jpg",
    price: '$100'
  },
  {
    title: 'Organic Superfood Chia Seed',
    subtitle: 'herb',
    text: 'Descriptions',
    url: "../../assets/img/Hierbas/Organic Superfood_Chia_Seed.jpg",
    price: '$100'
  },
  {
    title: 'Organic Turmeric Root Powder',
    subtitle: 'herb',
    text: 'Descriptions',
    url: "../../assets/img/Hierbas/Organic_Turmeric_Root_Powder.jpg",
    price: '$100'
  },
  {
    title: 'Organic Turmeric Root',
    subtitle: 'herb',
    text: 'Descriptions',
    url: "../../assets/img/Hierbas/Organic_Turmeric_Root.jpg",
    price: '$100'
  },
  {
    title: 'Poppy Seed',
    subtitle: 'herb',
    text: 'Descriptions',
    url: "../../assets/img/Hierbas/Poppy_Seed.jpg",
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
    url: "../../assets/img/Hierbas/Senna_Leaf.jpg",
    price: '$100'
  },
  {
    title: 'Virgin-Organic Black Seed',
    subtitle: 'herb',
    text: 'Descriptions',
    url: "../../assets/img/Hierbas/Virgin-Organic_Black_Seed.jpg",
    price: '$100'
  },
  {
    title: '',
    subtitle: 'herb',
    text: 'Descriptions',
    url: "../../assets/img/Hierbas/Hierbas,_Incienso_y_Aceites_Eseciales_1.jpg",
    price: '$100'
  },
  {
    title: '',
    subtitle: 'herb',
    text: 'Descriptions',
    url: "../../assets/img/Hierbas/Hierbas,_Incienso_y_Aceites_Eseciales_2.jpg",
    price: '$100'
  },
  {
    title: '',
    subtitle: 'herb',
    text: 'Descriptions',
    url: "../../assets/img/Hierbas/Hierbas,_Incienso_y_Aceites_Eseciales_3.jpg",
    price: '$100'
  },
  {
    title: '',
    subtitle: 'herb',
    text: 'Descriptions',
    url: "../../assets/img/Hierbas/Hierbas,_Incienso_y_Aceites_Eseciales_4.jpg",
    price: '$100'
  },
  {
    title: '',
    subtitle: 'herb',
    text: 'Descriptions',
    url: "../../assets/img/Hierbas/Hierbas,_Incienso_y_Aceites_Eseciales_5.jpg",
    price: '$100'
  },
  {
    title: '',
    subtitle: 'herb',
    text: 'Descriptions',
    url: "../../assets/img/Hierbas/Hierbas,_Incienso_y_Aceites_Esenciales_6-min.jpg",
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
