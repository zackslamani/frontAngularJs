import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { AddPangolinComponent } from './components/add-pangolin/add-pangolin.component';
import { PangolinDetailsComponent } from './components/pangolin-details/pangolin-details.component';
import { PangolinsListComponent } from './components/pangolins-list/pangolins-list.component';
import { from } from 'rxjs';

const routes: Routes = [
  { path: '', redirectTo: 'pangolins', pathMatch: 'full'},
  { path: 'pangolins', component: PangolinsListComponent },
  { path: 'pangolins/:id', component:PangolinDetailsComponent },
  { path: 'add', component:AddPangolinComponent}
];



@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
