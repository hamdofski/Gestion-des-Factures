import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CreateFactureComponent } from './create-facture/create-facture.component';
import { ListFacturesComponent } from './list-factures/list-factures.component';
import { ShowFactureComponent } from './show-facture/show-facture.component'; 

const appRoutes: Routes = [
  {path:'', component: AppComponent},
  {path:'ajouter', component: CreateFactureComponent},
  {path:'display', component: ShowFactureComponent},
  {path:'factures', component: ListFacturesComponent}
  
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
