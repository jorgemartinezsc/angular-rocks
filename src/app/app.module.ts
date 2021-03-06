import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DrawertoggleComponent } from './components/header/drawertoggle/drawertoggle.component';
import { NavigationComponent } from './components/header/navigation/navigation.component';
import { NavigationItemsComponent } from './components/header/navigation/navigation-items/navigation-items.component';
import { NavigationItemComponent } from './components/header/navigation/navigation-items/navigation-item/navigation-item.component';
import { NavigationModalComponent } from './components/header/navigation/navigation-modal/navigation-modal.component';
import { NavigationSearchComponent } from './components/header/navigation/navigation-search/navigation-search.component';
import { BandComponent } from './components/band/band.component';
import { BandFormComponent } from './components/band/band-form/band-form.component';
import { HomeComponent } from './components/home/home.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DrawertoggleComponent,
    NavigationComponent,
    NavigationItemsComponent,
    NavigationItemComponent,
    NavigationModalComponent,
    NavigationSearchComponent,
    BandComponent,
    BandFormComponent,
    HomeComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
