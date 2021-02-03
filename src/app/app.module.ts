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
import { PerfumesComponent } from './perfumes/perfumes.component';
import { PerfumesCaballerosComponent } from './perfumes-caballeros/perfumes-caballeros.component';
import { PerfumesDamasComponent } from './perfumes-damas/perfumes-damas.component';
import { PharmaciaComponent } from './pharmacia/pharmacia.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FajasYDietasGridComponent } from './fajas-y-dietas-grid/fajas-y-dietas-grid.component';
import { HierbasGridComponent} from './hierbas-grid/hierbas-grid.component';
import { PerfumesMenGridComponent } from './perfumes-men-grid/perfumes-men-grid.component';
import { PerfumesWomenGridComponent } from './perfumes-women-grid/perfumes-women-grid.component';
import {GridListComponent} from './grid-list/grid-list.component';
import { MedicineCarouselComponent } from './medicine-carousel/medicine-carousel.component';
import { MatCarouselModule } from '@ngbmodule/material-carousel';
import { PharmaciaCarouselComponent } from './pharmacia-carousel/pharmacia-carousel.component';
import { HierbasCarouselComponent } from './hierbas-carousel/hierbas-carousel.component';
import { PerfumesCarouselComponent } from './perfumes-carousel/perfumes-carousel.component';
import { AcercaCarouselComponent } from './acerca-carousel/acerca-carousel.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ReligiosoComponent } from './religioso/religioso.component';
import { MiscellaneousComponent } from './miscellaneous/miscellaneous.component';
import { ReligiosoGridComponent } from './religioso-grid/religioso-grid.component';
import { MiscellaneousGridComponent } from './miscellaneous-grid/miscellaneous-grid.component';
import { PerfumesMenCarouselComponent } from './perfumes-men-carousel/perfumes-men-carousel.component';
import { PerfumesWommenCarouselComponent } from './perfumes-women-carousel/perfumes-women-carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    GridListComponent,
    AcercaComponent,
    ContactenosComponent,
    FajasYDietasComponent,
    HierbasComponent,
    MedicinasComponent,
    PerfumesComponent,
    PerfumesCaballerosComponent,
    PerfumesDamasComponent,
    PharmaciaComponent,
    FajasYDietasGridComponent,
    HierbasGridComponent,
    PerfumesMenGridComponent,
    PerfumesWomenGridComponent,
    MedicineCarouselComponent,
    PharmaciaCarouselComponent,
    HierbasCarouselComponent,
    PerfumesCarouselComponent,
    AcercaCarouselComponent,
    NotFoundComponent,
    ReligiosoComponent,
    MiscellaneousComponent,
    ReligiosoGridComponent,
    MiscellaneousGridComponent,
    PerfumesMenCarouselComponent,
    PerfumesWommenCarouselComponent
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
