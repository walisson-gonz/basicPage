import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BannersComponent } from './body/banners/banners.component';
import { Cards1Component } from './body/cards1/cards1.component';
import { Cards2Component } from './body/cards2/cards2.component';
import { NewsletterComponent } from './body/newsletter/newsletter.component';
import { ModalComponent } from './body/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannersComponent,
    Cards1Component,
    Cards2Component,
    NewsletterComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
