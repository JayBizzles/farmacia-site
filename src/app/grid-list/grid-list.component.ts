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
    url: "../../assets/img/medicine-pics/Black_Cohosh.jpg",
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
    url:"../../assets/img/medicine-pics/Camu_Camu.jpg"
  },
  {
    title: 'ChildLife_Multi_Vitamin_Mineral',
    subtitle: 'medicine',
    text: 'Descriptions',
    price: '$100',
    url:"../../assets/img/medicine-pics/ChildLife_Multi_Vitamin_Mineral.jpg"
  },
  {
    title: 'CleanStart  ',
    subtitle: 'medicine',
    text: 'Descriptions',
    price: '$100',
    url:"../../assets/img/medicine-pics/CleanStart_1.jpg"
  },
  {
    title: 'Echinacea Goldenseal',
    subtitle: 'medicine',
    text: 'Descriptions',
    price: '$100',
    url:"../../assets/img/medicine-pics/Echinacea_Goldenseal.jpg"
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
    url:"../../assets/img/medicine-pics/Emulsion_de_Escocia Sabor_a_Cereza.jpg"
  },
  {
    title: 'Emulsion de Escocia Sabor a Fresa Banana',
    subtitle: 'medicine',
    text: 'Descriptions',
    price: '$100',
    url:"../../assets/img/medicine-pics/Emulsion_de_Escocia_Sabor_a_Fresa_Banana.jpg"
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
  url:"../../assets/img/medicine-pics/Extracto_de_Malta_Con_Hemoglobina.jpg"
},
{title: 'FCS II',
  subtitle: 'medicine',
  text: 'Descriptions',
  price: '$100',
  url:"../../assets/img/medicine-pics/FCS_II.jpg"
},
{title: 'Female Confort',
  subtitle: 'medicine',
  text: 'Descriptions',
  price: '$100',
  url:"../../assets/img/medicine-pics/Female_Confort.jpg"
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
  url:"../../assets/img/medicine-pics/Gastro_Health.jpg"
},
{title: 'Geritol Energy Support ',
  subtitle: 'medicine',
  text: 'Descriptions',
  price: '$100',
  url:"../../assets/img/medicine-pics/Geritol_Energy_Support.jpg"
},
{title: 'Geritol Nutrition Support',
  subtitle: 'medicine',
  text: 'Descriptions',
  price: '$100',
  url:"../../assets/img/medicine-pics/Geritol_Nutrition_Support.jpg"
},
{title: 'Ginko Biloba Extract',
  subtitle: 'medicine',
  text: 'Descriptions',
  price: '$100',
  url:"../../assets/img/medicine-pics/Ginko_Biloba_Extract.jpg"
},
{title: 'Globulo Rojo',
  subtitle: 'medicine',
  text: 'Descriptions',
  price: '$100',
  url:"../../assets/img/medicine-pics/Globulo_Rojo.jpg"
},
{title: 'Golden Seal',
  subtitle: 'medicine',
  text: 'Descriptions',
  price: '$100',
  url:"../../assets/img/medicine-pics/Golden_Seal.jpg"
},
{title: 'Immune Stimulator ',
  subtitle: 'medicine',
  text: 'Descriptions',
  price: '$100',
  url:"../../assets/img/medicine-pics/Immune_Stimulator.jpg"
},
{title: 'Korean Ginseng',
  subtitle: 'medicine',
  text: 'Descriptions',
  price: '$100',
  url:"../../assets/img/medicine-pics/Korean_Ginseng.jpg"
},
{title: 'Lydia Pinkham',
  subtitle: 'medicine',
  text: 'Descriptions',
  price: '$100',
  url:"../../assets/img/medicine-pics/Lyida_Pinkham.jpg"
},
{title: 'Male Response',
  subtitle: 'medicine',
  text: 'Descriptions',
  price: '$100',
  url:"../../assets/img/medicine-pics/Male_Response.jpg"
},
{title: 'Men_s DHEA-M',
  subtitle: 'medicine',
  text: 'Descriptions',
  price: '$100',
  url:"../../assets/img/medicine-pics/Men_s_DHEA-M.jpg"
},
{title: 'Men_s X-Action',
  subtitle: 'medicine',
  text: 'Descriptions',
  price: '$100',
  url:"../../assets/img/medicine-pics/Men_s_X-Action.jpg"
},
{title: 'Neuro Vital Vitamin B12',
  subtitle: 'medicine',
  text: 'Descriptions',
  price: '$100',
  url:"../../assets/img/medicine-pics/Neuro_Vital_Vitamin B12.jpg"
},
{title: 'NeuroBion B-12 Complex',
  subtitle: 'medicine',
  text: 'Descriptions',
  price: '$100',
  url:"../../assets/img/medicine-pics/NeuroBion_B-12_Complex.jpg"
},
{title: 'NeuroBion B12 Forte',
  subtitle: 'medicine',
  text: 'Descriptions',
  price: '$100',
  url:"../../assets/img/medicine-pics/NeuroBion_B12_Forte.jpg"
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
  url:"../../assets/img/medicine-pics/Neuroferrical_B12.jpg"
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
  url:"../../assets/img/medicine-pics/Pastillas_Mc.Coy.jpg"
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
  url:"../../assets/img/medicine-pics/Rabano_Yodado.jpg"
},
{title: 'S.S.S. B-Vitaminas',
  subtitle: 'medicine',
  text: 'Descriptions',
  price: '$100',
  url:"../../assets/img/medicine-pics/S.S.S._B-Vitaminas.jpg"
},
{title: 'Saw Palmetto',
  subtitle: 'medicine',
  text: 'Descriptions',
  price: '$100',
  url:"../../assets/img/medicine-pics/Saw_Palmetto.jpg"
},
{title: 'Sukrol ',
  subtitle: 'medicine',
  text: 'Descriptions',
  price: '$100',
  url:"../../assets/img/medicine-pics/Sukrol.jpg"
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
  url:"../../assets/img/medicine-pics/Vital_Fuerte_Large.jpg"
},
{title: 'Vital Fuerte small',
  subtitle: 'medicine',
  text: 'Descriptions',
  price: '$100',
  url:"../../assets/img/medicine-pics/Vital_Fuerte_small.jpg"
},
{title: 'Women_s DHEA-F',
  subtitle: 'medicine',
  text: 'Descriptions',
  price: '$100',
  url:"../../assets/img/medicine-pics/Women_s_DHEA-F.jpg"
},
{title: 'Yeast_Fungal Detox',
  subtitle: 'medicine',
  text: 'Descriptions',
  price: '$100',
  url:"../../assets/img/medicine-pics/Yeast_Fungal_Detox.jpg"
},
{ title: '',
  subtitle: 'medicine',
  text: 'Descriptions',
  price: '$100',
  url:"../../assets/img/medicine-pics/Medicina,_Salud_y_Belleza_1-min.jpg"
},
{title: '',
  subtitle: 'medicine',
  text: 'Descriptions',
  price: '$100',
  url:"../../assets/img/medicine-pics/Medicina,_Salud_y_Belleza_2-min.jpg"
},
{title: '',
  subtitle: 'medicine',
  text: 'Descriptions',
  price: '$100',
  url:"../../assets/img/medicine-pics/Medicina,_Salud_y_Belleza_3-min.jpg"
},
{title: '',
  subtitle: 'medicine',
  text: 'Descriptions',
  price: '$100',
  url:"../../assets/img/medicine-pics/Medicina,_Salud_y_Belleza_4-min.jpg"
},
{title: '',
  subtitle: 'medicine',
  text: 'Descriptions',
  price: '$100',
  url:"../../assets/img/medicine-pics/Medicina,_Salud_y_Belleza_5-min.jpg"
},
{title: '',
  subtitle: 'medicine',
  text: 'Descriptions',
  price: '$100',
  url:"../../assets/img/medicine-pics/Medicina,_Salud_y_Belleza_6-min.jpg"
},
{title: '',
  subtitle: 'medicine',
  text: 'Descriptions',
  price: '$100',
  url:"../../assets/img/medicine-pics/Medicina,_Salud_y_Belleza_7-min.jpg"
},
{title: '',
  subtitle: 'medicine',
  text: 'Descriptions',
  price: '$100',
  url:"../../assets/img/medicine-pics/Medicina,_Salud_y_Belleza_8-min.jpg"
},
{title: '',
  subtitle: 'medicine',
  text: 'Descriptions',
  price: '$100',
  url:"../../assets/img/medicine-pics/Medicina,_Salud_y_Belleza_10-min.jpg"
},
{title: '',
  subtitle: 'medicine',
  text: 'Descriptions',
  price: '$100',
  url:"../../assets/img/medicine-pics/Medicina,_Salud_y_Belleza_11-min.jpg"
},
{title: '',
  subtitle: 'medicine',
  text: 'Descriptions',
  price: '$100',
  url:"../../assets/img/medicine-pics/Medicina,_Salud_y_Belleza_12-min.jpg"
},
{title: '',
  subtitle: 'medicine',
  text: 'Descriptions',
  price: '$100',
  url:"../../assets/img/medicine-pics/Medicina,_Salud_y_Belleza_13-min.jpg"
},
{title: '',
  subtitle: 'medicine',
  text: 'Descriptions',
  price: '$100',
  url:"../../assets/img/medicine-pics/Medicina,_Salud_y_Belleza_14-min.jpg"
},
{title: '',
  subtitle: 'medicine',
  text: 'Descriptions',
  price: '$100',
  url:"../../assets/img/medicine-pics/Medicina,_Salud_y_Belleza_15-min.jpg"
},
{title: '',
  subtitle: 'medicine',
  text: 'Descriptions',
  price: '$100',
  url:"../../assets/img/medicine-pics/Medicina,_Salud_y_Belleza_16-min.jpg"
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
