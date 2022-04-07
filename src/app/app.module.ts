import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import 'hammerjs';
import { DemoPipe } from './pipes/demo-pipe';
import { DemoDirective } from './directives/demo-directives';
 

@NgModule({
  declarations: [
    AppComponent , 
    DemoPipe , 
    DemoDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
  ],
  providers: [
     DemoPipe
  ],
  schemas:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
