import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LocationForecastComponent } from './location-forecast/location-forecast.component'
import { WeatherRoutingModule } from './weather-routing.module'

@NgModule({
  declarations: [LocationForecastComponent],
  imports: [CommonModule, WeatherRoutingModule],
})
export class WeatherModule {}
