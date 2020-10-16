import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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

@NgModule({
  declarations: [
    AppComponent,
    AcercaComponent,
    ContactenosComponent,
    FajasYDietasComponent,
    HierbasComponent,
    MedicinasComponent,
    MiscelanosComponent,
    PerfumesComponent,
    PerfumesCaballerosComponent,
    PerfumesDamasComponent,
    PharmaciaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
