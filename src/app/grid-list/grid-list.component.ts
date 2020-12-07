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
    title: 'Black Cohosh',
    subtitle: 'medicine',
    text: 'Descriptions',
    url: "../../assets/img/medicine-pics/Black Cohosh.jpg",
    price: '$100'
  },
  {
    title: 'Brain-Protex',
    subtitle: 'medicine',
    text: 'Descriptions',
    url: "../../assets/img/medicine-pics/Brain-Protex.jpg",
    price: '$100'
  },
  {
    title: 'Camu Camu',
    subtitle: 'medicine',
    text: 'Descriptions',
    price: '$100',
    url:"../../assets/img/medicine-pics/Camu Camu .jpg"
  },
  {
    title: 'ChildLife Multi Vitamin _ Mineral',
    subtitle: 'medicine',
    text: 'Descriptions',
    price: '$100',
    url:"../../assets/img/medicine-pics/ChildLife Multi Vitamin _ Mineral.jpg"
  },
  {
    title: 'CleanStart  ',
    subtitle: 'medicine',
    text: 'Descriptions',
    price: '$100',
    url:"../../assets/img/medicine-pics/CleanStart 1.jpg"
  },
  {
    title: 'Echinacea Goldenseal',
    subtitle: 'medicine',
    text: 'Descriptions',
    price: '$100',
    url:"../../assets/img/medicine-pics/Echinacea Goldenseal.jpg"
  },
  {
    title: 'Echinacea',
    subtitle: 'medicine',
    text: 'Descriptions',
    price: '$100',
    url:"../../assets/img/medicine-pics/Echinacea.jpg"
  },
  {
    title: 'Emulsion de Escocia Sabor a Cereza ',
    subtitle: 'medicine',
    text: 'Descriptions',
    price: '$100',
    url:"../../assets/img/medicine-pics/Emulsion de Escocia Sabor a Cereza .jpg"
  },
  {
    title: 'Emulsion de Escocia Sabor a Fresa Banana',
    subtitle: 'medicine',
    text: 'Descriptions',
    price: '$100',
    url:"../../assets/img/medicine-pics/Emulsion de Escocia Sabor a Fresa Banana.jpg"
  },
  {title: 'Equolibrium',
  subtitle: 'medicine',
  text: 'Descriptions',
  price: '$100',
  url:"../../assets/img/medicine-pics/Equolibrium.jpg"
},
{title: 'Extracto de Malta Con Hemoglobina',
  subtitle: 'medicine',
  text: 'Descriptions',
  price: '$100',
  url:"../../assets/img/medicine-pics/Extracto de Malta Con Hemoglobina.jpg"
},
{title: 'FCS II',
  subtitle: 'medicine',
  text: 'Descriptions',
  price: '$100',
  url:"../../assets/img/medicine-pics/FCS II.jpg"
},
{title: 'Female Confort',
  subtitle: 'medicine',
  text: 'Descriptions',
  price: '$100',
  url:"../../assets/img/medicine-pics/Female Confort.jpg"
},
{title: 'Flash-Ease',
  subtitle: 'medicine',
  text: 'Descriptions',
  price: '$100',
  url:"../../assets/img/medicine-pics/Flash-Ease.jpg"
},
{title: 'Gastro Health ',
  subtitle: 'medicine',
  text: 'Descriptions',
  price: '$100',
  url:"../../assets/img/medicine-pics/Gastro Health .jpg"
},
{title: 'Geritol Energy Support ',
  subtitle: 'medicine',
  text: 'Descriptions',
  price: '$100',
  url:"../../assets/img/medicine-pics/Geritol Energy Support .jpg"
},
{title: 'Geritol Nutrition Support',
  subtitle: 'medicine',
  text: 'Descriptions',
  price: '$100',
  url:"../../assets/img/medicine-pics/Geritol Nutrition Support.jpg"
},
{title: 'Ginko Biloba Extract',
  subtitle: 'medicine',
  text: 'Descriptions',
  price: '$100',
  url:"../../assets/img/medicine-pics/Ginko Biloba Extract.jpg"
},
{title: 'Globulo Rojo',
  subtitle: 'medicine',
  text: 'Descriptions',
  price: '$100',
  url:"../../assets/img/medicine-pics/Globulo Rojo.jpg"
},
{title: 'Golden Seal',
  subtitle: 'medicine',
  text: 'Descriptions',
  price: '$100',
  url:"../../assets/img/medicine-pics/Golden Seal.jpg"
},
{title: 'Immune Stimulator ',
  subtitle: 'medicine',
  text: 'Descriptions',
  price: '$100',
  url:"../../assets/img/medicine-pics/Immune Stimulator .jpg"
},
{title: 'Korean Ginseng',
  subtitle: 'medicine',
  text: 'Descriptions',
  price: '$100',
  url:"../../assets/img/medicine-pics/Korean Ginseng.jpg"
},
{title: 'Lydia Pinkham',
  subtitle: 'medicine',
  text: 'Descriptions',
  price: '$100',
  url:"../../assets/img/medicine-pics/Lyida Pinkham.jpg"
},
{title: 'Male Response',
  subtitle: 'medicine',
  text: 'Descriptions',
  price: '$100',
  url:"../../assets/img/medicine-pics/Male Response.jpg"
},
{title: 'Men_s DHEA-M',
  subtitle: 'medicine',
  text: 'Descriptions',
  price: '$100',
  url:"../../assets/img/medicine-pics/Men_s DHEA-M.jpg"
},
{title: 'Men_s X-Action',
  subtitle: 'medicine',
  text: 'Descriptions',
  price: '$100',
  url:"../../assets/img/medicine-pics/Men_s X-Action.jpg"
},
{title: 'Neuro Vital Vitamin B12',
  subtitle: 'medicine',
  text: 'Descriptions',
  price: '$100',
  url:"../../assets/img/medicine-pics/Neuro Vital Vitamin B12.jpg"
},
{title: 'NeuroBion B-12 Complex',
  subtitle: 'medicine',
  text: 'Descriptions',
  price: '$100',
  url:"../../assets/img/medicine-pics/NeuroBion B-12 Complex.jpg"
},
{title: 'NeuroBion B12 Forte',
  subtitle: 'medicine',
  text: 'Descriptions',
  price: '$100',
  url:"../../assets/img/medicine-pics/NeuroBion B12 Forte.jpg"
},
{title: 'NeuroBion',
  subtitle: 'medicine',
  text: 'Descriptions',
  price: '$100',
  url:"../../assets/img/medicine-pics/NeuroBion.jpg"
},
{title: 'Neuroferrical B12',
  subtitle: 'medicine',
  text: 'Descriptions',
  price: '$100',
  url:"../../assets/img/medicine-pics/Neuroferrical B12.jpg"
},
{title: 'Neurofosfaton',
  subtitle: 'medicine',
  text: 'Descriptions',
  price: '$100',
  url:"../../assets/img/medicine-pics/Neurofosfaton.jpg"
},
{title: 'Pastillas Mc.Coy',
  subtitle: 'medicine',
  text: 'Descriptions',
  price: '$100',
  url:"../../assets/img/medicine-pics/Pastillas Mc.Coy.jpg"
},
{title: 'Proactazyme',
  subtitle: 'medicine',
  text: 'Descriptions',
  price: '$100',
  url:"../../assets/img/medicine-pics/Proactazyme.jpg"
},
{title: 'Prosta-Response',
  subtitle: 'medicine',
  text: 'Descriptions',
  price: '$100',
  url:"../../assets/img/medicine-pics/Prosta-Response.jpg"
},
{title: 'Rabano Yodado',
  subtitle: 'medicine',
  text: 'Descriptions',
  price: '$100',
  url:"../../assets/img/medicine-pics/Rabano Yodado.jpg"
},
{title: 'S.S.S. B-Vitaminas',
  subtitle: 'medicine',
  text: 'Descriptions',
  price: '$100',
  url:"../../assets/img/medicine-pics/S.S.S. B-Vitaminas.jpg"
},
{title: 'Saw Palmetto',
  subtitle: 'medicine',
  text: 'Descriptions',
  price: '$100',
  url:"../../assets/img/medicine-pics/Saw Palmetto.jpg"
},
{title: 'Sukrol ',
  subtitle: 'medicine',
  text: 'Descriptions',
  price: '$100',
  url:"../../assets/img/medicine-pics/Sukrol .jpg"
},
{title: 'Vari-Gone',
  subtitle: 'medicine',
  text: 'Descriptions',
  price: '$100',
  url:"../../assets/img/medicine-pics/Vari-Gone.jpg"
},
{title: 'Vital Fuerte Large',
  subtitle: 'medicine',
  text: 'Descriptions',
  price: '$100',
  url:"../../assets/img/medicine-pics/Vital Fuerte Large.jpg"
},
{title: 'Vital Fuerte small',
  subtitle: 'medicine',
  text: 'Descriptions',
  price: '$100',
  url:"../../assets/img/medicine-pics/Vital Fuerte small.jpg"
},
{title: 'Women_s DHEA-F',
  subtitle: 'medicine',
  text: 'Descriptions',
  price: '$100',
  url:"../../assets/img/medicine-pics/Women_s DHEA-F.jpg"
},
{title: 'Yeast_Fungal Detox',
  subtitle: 'medicine',
  text: 'Descriptions',
  price: '$100',
  url:"../../assets/img/medicine-pics/Yeast_Fungal Detox.jpg"
}

];


@Component({
  selector: 'app-grid-list',
  templateUrl: './grid-list.component.html',
  styleUrls: ['./grid-list.component.scss']
})
export class GridListComponent implements OnInit, OnDestroy {

 

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
