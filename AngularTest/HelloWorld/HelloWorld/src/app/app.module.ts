import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BadgeOverviewExample } from './badge-overview/badge-overview-example';
import { WeatherModule } from './weather/weather..module';


@NgModule({
  declarations: [
    AppComponent,
    BadgeOverviewExample
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatIconModule,
    MatButtonModule,
    WeatherModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


