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
    title: 'Kepawel Core',
    subtitle: 'fajas y diet',
    text: 'Descriptions',
    url: "../../assets/img/Fajas/9CB50E11-EBC9-4645-BBD6-C82B59155F0E-892835F0-4A72-4649-A404-8266BAA0E4E0.JPG",
    price: '$100'
  },
  {
   title: 'Kepawel Core',
   subtitle: 'fajas y diet',
   text: 'Descriptions',
   url: "../../assets/img/Fajas/3764C5C1-DE2B-4EAA-AD93-939750B8346B-ECBABFA4-9302-474B-AFEE-35E2A34DDCC8.JPG",
   price: '$100'
 },
 {
  title: 'Kepawel Core',
  subtitle: 'fajas y diet',
  text: 'Descriptions',
  url: "../../assets/img/Fajas/B03726DB-B8F7-48CA-84BC-BC8A34C9E5CE-1A1B49A1-7FAF-4344-9B1A-952EBE7D69E5.JPG",
  price: '$100'
  },
  {
    title: 'Kepawel Core',
    subtitle: 'fajas y diet',
    text: 'Descriptions',
    url: "../../assets/img/Fajas/F68730B4-E5F6-4472-8043-280D5419EF9C-C9EBAE69-7442-4513-A5E2-8088B51FC21A.JPG",
    price: '$100'
  },
  {
    title: 'Kepawel Core',
    subtitle: 'fajas y diet',
    text: 'Descriptions',
    url: "../../assets/img/Fajas/64E22B33-9FF2-4D3B-8571-23C4A12DC77D-67149688-F17E-4680-9D92-2CC83E88D0D3.JPG",
    price: '$100'
  }
];

@Component({
  selector: 'app-fajas-y-dietas-grid',
  templateUrl: './fajas-y-dietas-grid.component.html',
  styleUrls: ['./fajas-y-dietas-grid.component.scss']
})
export class FajasYDietasGridComponent implements OnInit, OnDestroy {


 
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
 
