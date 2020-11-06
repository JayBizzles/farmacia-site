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
    url: "../../assets/img/medicine-pics/Black Cohosh.JPG",
    price: '$100'
  },
  {
    title: 'Brain-Protex',
    subtitle: 'medicine',
    text: 'Descriptions',
    url: "../../assets/img/medicine-pics/Brain-Protex.JPG",
    price: '$100'
  },
  {
    title: 'Camu Camu',
    subtitle: 'medicine',
    text: 'Descriptions',
    price: '$100',
    url:"../../assets/img/medicine-pics/Camu Camu .JPG"
  },
  {
    title: 'ChildLife Multi Vitamin _ Mineral',
    subtitle: 'medicine',
    text: 'Descriptions',
    price: '$100',
    url:"../../assets/img/medicine-pics/ChildLife Multi Vitamin _ Mineral.JPG"
  },
  {
    title: 'CleanStart  ',
    subtitle: 'medicine',
    text: 'Descriptions',
    price: '$100',
    url:"../../assets/img/medicine-pics/CleanStart 1.JPG"
  },
  {
    title: 'Echinacea Goldenseal',
    subtitle: 'medicine',
    text: 'Descriptions',
    price: '$100',
    url:"../../assets/img/medicine-pics/Echinacea Goldenseal.JPG"
  },
  {
    title: 'Echinacea',
    subtitle: 'medicine',
    text: 'Descriptions',
    price: '$100',
    url:"../../assets/img/medicine-pics/Echinacea.JPG"
  },
  {
    title: 'Emulsion de Escocia Sabor a Cereza ',
    subtitle: 'medicine',
    text: 'Descriptions',
    price: '$100',
    url:"../../assets/img/medicine-pics/Emulsion de Escocia Sabor a Cereza .JPG"
  },
  {
    title: 'Emulsion de Escocia Sabor a Fresa Banana',
    subtitle: 'medicine',
    text: 'Descriptions',
    price: '$100',
    url:"../../assets/img/medicine-pics/Emulsion de Escocia Sabor a Fresa Banana.JPG"
  },
  {title: 'Equolibrium',
  subtitle: 'medicine',
  text: 'Descriptions',
  price: '$100',
  url:"../../assets/img/medicine-pics/Equolibrium.JPG"
},
{title: 'Extracto de Malta Con Hemoglobina',
  subtitle: 'medicine',
  text: 'Descriptions',
  price: '$100',
  url:"../../assets/img/medicine-pics/Extracto de Malta Con Hemoglobina.JPG"
},
{title: 'FCS II',
  subtitle: 'medicine',
  text: 'Descriptions',
  price: '$100',
  url:"../../assets/img/medicine-pics/FCS II.JPG"
},
{title: 'Female Confort',
  subtitle: 'medicine',
  text: 'Descriptions',
  price: '$100',
  url:"../../assets/img/medicine-pics/Female Confort.JPG"
},
{title: 'Flash-Ease',
  subtitle: 'medicine',
  text: 'Descriptions',
  price: '$100',
  url:"../../assets/img/medicine-pics/Flash-Ease.JPG"
},
{title: 'Gastro Health ',
  subtitle: 'medicine',
  text: 'Descriptions',
  price: '$100',
  url:"../../assets/img/medicine-pics/Gastro Health .JPG"
},
{title: 'Geritol Energy Support ',
  subtitle: 'medicine',
  text: 'Descriptions',
  price: '$100',
  url:"../../assets/img/medicine-pics/Geritol Energy Support .JPG"
},
{title: 'Geritol Nutrition Support',
  subtitle: 'medicine',
  text: 'Descriptions',
  price: '$100',
  url:"../../assets/img/medicine-pics/Geritol Nutrition Support.JPG"
},
{title: 'Ginko Biloba Extract',
  subtitle: 'medicine',
  text: 'Descriptions',
  price: '$100',
  url:"../../assets/img/medicine-pics/Ginko Biloba Extract.JPG"
},
{title: 'Globulo Rojo',
  subtitle: 'medicine',
  text: 'Descriptions',
  price: '$100',
  url:"../../assets/img/medicine-pics/Globulo Rojo.JPG"
},
{title: 'Golden Seal',
  subtitle: 'medicine',
  text: 'Descriptions',
  price: '$100',
  url:"../../assets/img/medicine-pics/Golden Seal.JPG"
},
{title: 'Immune Stimulator ',
  subtitle: 'medicine',
  text: 'Descriptions',
  price: '$100',
  url:"../../assets/img/medicine-pics/Immune Stimulator .JPG"
},
{title: 'Korean Ginseng',
  subtitle: 'medicine',
  text: 'Descriptions',
  price: '$100',
  url:"../../assets/img/medicine-pics/Korean Ginseng.JPG"
},
{title: 'Lydia Pinkham',
  subtitle: 'medicine',
  text: 'Descriptions',
  price: '$100',
  url:"../../assets/img/medicine-pics/Lyida Pinkham.JPG"
},
{title: 'Male Response',
  subtitle: 'medicine',
  text: 'Descriptions',
  price: '$100',
  url:"../../assets/img/medicine-pics/Male Response.JPG"
},
{title: 'Men_s DHEA-M',
  subtitle: 'medicine',
  text: 'Descriptions',
  price: '$100',
  url:"../../assets/img/medicine-pics/Men_s DHEA-M.JPG"
},
{title: 'Men_s X-Action',
  subtitle: 'medicine',
  text: 'Descriptions',
  price: '$100',
  url:"../../assets/img/medicine-pics/Men_s X-Action.JPG"
},
{title: 'Neuro Vital Vitamin B12',
  subtitle: 'medicine',
  text: 'Descriptions',
  price: '$100',
  url:"../../assets/img/medicine-pics/Neuro Vital Vitamin B12.JPG"
},
{title: 'NeuroBion B-12 Complex',
  subtitle: 'medicine',
  text: 'Descriptions',
  price: '$100',
  url:"../../assets/img/medicine-pics/NeuroBion B-12 Complex.JPG"
},
{title: 'NeuroBion B12 Forte',
  subtitle: 'medicine',
  text: 'Descriptions',
  price: '$100',
  url:"../../assets/img/medicine-pics/NeuroBion B12 Forte.JPG"
},
{title: 'NeuroBion',
  subtitle: 'medicine',
  text: 'Descriptions',
  price: '$100',
  url:"../../assets/img/medicine-pics/NeuroBion.JPG"
},
{title: 'Neuroferrical B12',
  subtitle: 'medicine',
  text: 'Descriptions',
  price: '$100',
  url:"../../assets/img/medicine-pics/Neuroferrical B12.JPG"
},
{title: 'Neurofosfaton',
  subtitle: 'medicine',
  text: 'Descriptions',
  price: '$100',
  url:"../../assets/img/medicine-pics/Neurofosfaton.JPG"
},
{title: 'Pastillas Mc.Coy',
  subtitle: 'medicine',
  text: 'Descriptions',
  price: '$100',
  url:"../../assets/img/medicine-pics/Pastillas Mc.Coy.JPG"
},
{title: 'Proactazyme',
  subtitle: 'medicine',
  text: 'Descriptions',
  price: '$100',
  url:"../../assets/img/medicine-pics/Proactazyme.JPG"
},
{title: 'Prosta-Response',
  subtitle: 'medicine',
  text: 'Descriptions',
  price: '$100',
  url:"../../assets/img/medicine-pics/Prosta-Response.JPG"
},
{title: 'Rabano Yodado',
  subtitle: 'medicine',
  text: 'Descriptions',
  price: '$100',
  url:"../../assets/img/medicine-pics/Rabano Yodado.JPG"
},
{title: 'S.S.S. B-Vitaminas',
  subtitle: 'medicine',
  text: 'Descriptions',
  price: '$100',
  url:"../../assets/img/medicine-pics/S.S.S. B-Vitaminas.JPG"
},
{title: 'Saw Palmetto',
  subtitle: 'medicine',
  text: 'Descriptions',
  price: '$100',
  url:"../../assets/img/medicine-pics/Saw Palmetto.JPG"
},
{title: 'Sukrol ',
  subtitle: 'medicine',
  text: 'Descriptions',
  price: '$100',
  url:"../../assets/img/medicine-pics/Sukrol .JPG"
},
{title: 'Vari-Gone',
  subtitle: 'medicine',
  text: 'Descriptions',
  price: '$100',
  url:"../../assets/img/medicine-pics/Vari-Gone.JPG"
},
{title: 'Vital Fuerte Large',
  subtitle: 'medicine',
  text: 'Descriptions',
  price: '$100',
  url:"../../assets/img/medicine-pics/Vital Fuerte Large.JPG"
},
{title: 'Vital Fuerte small',
  subtitle: 'medicine',
  text: 'Descriptions',
  price: '$100',
  url:"../../assets/img/medicine-pics/Vital Fuerte small.JPG"
},
{title: 'Women_s DHEA-F',
  subtitle: 'medicine',
  text: 'Descriptions',
  price: '$100',
  url:"../../assets/img/medicine-pics/Women_s DHEA-F.JPG"
},
{title: 'Yeast_Fungal Detox',
  subtitle: 'medicine',
  text: 'Descriptions',
  price: '$100',
  url:"../../assets/img/medicine-pics/Yeast_Fungal Detox.JPG"
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
