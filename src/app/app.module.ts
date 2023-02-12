import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { HttpClientModule } from '@angular/common/http';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { ResultsComponent } from './results/results.component';
import { StartPageComponent } from './start-page/start-page.component';
import { SearchComponent } from './search/search.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    ResultsComponent,
    StartPageComponent,
    SearchComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    NgSelectModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
