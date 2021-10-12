import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { CommonHelperModule } from './features/common/common-module.module'
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CommonHelperModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
