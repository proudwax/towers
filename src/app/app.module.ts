import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { ListTowersComponent } from './list-towers/list-towers.component';
import { TowerComponent } from './tower/tower.component';

@NgModule({
  declarations: [
    AppComponent,
    ListTowersComponent,
    TowerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false, delay: 500 }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
