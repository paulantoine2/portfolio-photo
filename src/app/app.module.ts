import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AosToken, aos } from './aos';
import { routes } from './app.routing';
import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PictureCardComponent } from './components/picture-card/picture-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PictureCardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    { provide: AosToken, useValue: aos },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
