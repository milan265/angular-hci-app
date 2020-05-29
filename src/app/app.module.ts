import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { RoutingModule } from './routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FlexLayoutModule } from '@angular/flex-layout'
import { FormsModule } from '@angular/forms';

import { CookieService } from 'ngx-cookie-service';
import { KorisnikService } from './services/korisnik.service';
import { RestoranService } from './services/restoran.service';
import { ObrokService } from './services/obrok.service';
import { NarudzbinaService } from './services/narudzbina.service';
import { GradoviService } from './services/gradovi.service';

import { AppComponent } from './app.component';
import { PocetnaComponent } from './components/pocetna/pocetna.component';
import { PrijavaComponent } from './components/auth/prijava/prijava.component';
import { RegistracijaComponent } from './components/auth/registracija/registracija.component';
import { Page404Component } from './components/page404/page404.component';
import { ProfilComponent } from './components/profil/profil.component';
import { OmiljenaHranaComponent } from './components/omiljena-hrana/omiljena-hrana.component';
import { NarudzbineComponent } from './components/narudzbine/narudzbine.component';
import { OmiljeniRestoraniComponent } from './components/omiljeni-restorani/omiljeni-restorani.component';
import { AdreseComponent } from './components/adrese/adrese.component';
import { UtisciComponent } from './components/utisci/utisci.component';
import { KarticeComponent } from './components/kartice/kartice.component';

@NgModule({
  declarations: [
    AppComponent,
    PocetnaComponent,
    RegistracijaComponent,
    PrijavaComponent,
    Page404Component,
    ProfilComponent,
    OmiljenaHranaComponent,
    NarudzbineComponent,
    OmiljeniRestoraniComponent,
    AdreseComponent,
    UtisciComponent,
    KarticeComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    RoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule
  ],
  providers: [
    CookieService,
    KorisnikService,
    RestoranService,
    ObrokService,
    NarudzbinaService,
    GradoviService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
