

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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

const routes: Routes = [
  { path: 'AppComponent', component: AppComponent},
  { path: 'acerca', component: AcercaComponent },
  { path: 'contactenos', component: ContactenosComponent },
  { path: 'fajas-y-dietas', component: FajasYDietasComponent },
  { path: 'hierbas', component: HierbasComponent },
  { path: 'medicinas', component: MedicinasComponent },
  { path: 'miscelanos', component: MiscelanosComponent },
  { path: 'perfumes', component: PerfumesComponent },
  { path: 'perfumes-caballeros', component: PerfumesCaballerosComponent },
  { path: 'perfumes-damas', component: PerfumesDamasComponent },
  { path: 'pharmacia', component: PharmaciaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
