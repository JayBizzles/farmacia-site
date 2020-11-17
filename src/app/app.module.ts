import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './shared/material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcercaComponent } from './acerca/acerca.component';
import { ContactenosComponent } from './contactenos/contactenos.component';
import { FajasYDietasComponent } from './fajas-y-dietas/fajas-y-dietas.component';
import { HierbasComponent } from './hierbas/hierbas.component';
import { MedicinasComponent } from './medicinas/medicinas.component';
import { MiscelanosComponent } from './miscelanos/miscelanos.component';
import { PerfumesComponent } from './perfumes/perfumes.component';
import { PerfumesCaballerosComponent } from './perfumes-caballeros/perfumes-caballeros.component';
import { PerfumesDamasComponent } from './perfumes-damas/perfumes-damas.component';
import { PharmaciaComponent } from './pharmacia/pharmacia.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FajasYDietasGridComponent } from './fajas-y-dietas-grid/fajas-y-dietas-grid.component';
import { HierbasGridComponent} from './hierbas-grid/hierbas-grid.component';
import { MiscelanosGridComponent } from './miscelanos-grid/miscelanos-grid.component';
import { PerfumesMenGridComponent } from './perfumes-men-grid/perfumes-men-grid.component';
import { PerfumesWomenGridComponent } from './perfumes-women-grid/perfumes-women-grid.component';
import {GridListComponent} from './grid-list/grid-list.component';
import { MedicineCarouselComponent } from './medicine-carousel/medicine-carousel.component';
import { MatCarouselModule } from '@ngbmodule/material-carousel';

@NgModule({
  declarations: [
    AppComponent,
    GridListComponent,
    AcercaComponent,
    ContactenosComponent,
    FajasYDietasComponent,
    HierbasComponent,
    MedicinasComponent,
    MiscelanosComponent,
    PerfumesComponent,
    PerfumesCaballerosComponent,
    PerfumesDamasComponent,
    PharmaciaComponent,
    FajasYDietasGridComponent,
    HierbasGridComponent,
    MiscelanosGridComponent,
    PerfumesMenGridComponent,
    PerfumesWomenGridComponent,
    MedicineCarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    MatCarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
