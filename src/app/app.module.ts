import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component';
import { AddPangolinComponent } from './components/add-pangolin/add-pangolin.component';
import { PangolinsListComponent } from './components/pangolins-list/pangolins-list.component';
import { from } from 'rxjs';
import { PangolinDetailsComponent } from './components/pangolin-details/pangolin-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    AddPangolinComponent,
    PangolinsListComponent,
    PangolinDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
