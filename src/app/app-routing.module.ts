import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BandComponent } from './components/band/band.component';
import { BandFormComponent } from './components/band/band-form/band-form.component';


const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'band/:id', component: BandComponent},
  {path: 'create', component: BandFormComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
