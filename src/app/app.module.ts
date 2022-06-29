import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormatTimePipe } from './timer.pipe';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
	FormatTimePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
