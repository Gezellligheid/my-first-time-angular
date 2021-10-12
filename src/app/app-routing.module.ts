import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { LocationForecastComponent } from './features/weather/location-forecast/location-forecast.component'

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/weather/weather.module').then(w => w.WeatherModule),
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
