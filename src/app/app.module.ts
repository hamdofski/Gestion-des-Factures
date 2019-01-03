import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateFactureComponent } from './create-facture/create-facture.component';
import { ListFacturesComponent } from './list-factures/list-factures.component';
import { ShowFactureComponent } from './show-facture/show-facture.component';
import { HomeComponent } from './home/home.component'; 


@NgModule({
  declarations: [
    AppComponent,
    CreateFactureComponent,
    ListFacturesComponent,
    ShowFactureComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
