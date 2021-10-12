import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { LocationForecastComponent } from './location-forecast/location-forecast.component'

const routes: Routes = [
  {
    path: '',
    component: LocationForecastComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeatherRoutingModule {}
