import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AljaziraHeaderComponent } from './aljazira-header/aljazira-header.component';
import { HomeComponent } from './aljazira-header/home.component';
import { AboutusComponent } from './aljazira-header/aboutus.component';

import { routing } from './app.routing';
import { AljaziraFooterComponent } from './aljazira-footer.component';

@NgModule({
  declarations: [
    AppComponent,

    AljaziraHeaderComponent,

    HomeComponent,

    AboutusComponent,

    AljaziraFooterComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
