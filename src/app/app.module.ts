import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { RoutingModule } from './routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FlexLayoutModule } from '@angular/flex-layout'
import { FormsModule } from '@angular/forms';
import { BarRatingModule } from 'ngx-bar-rating';

import { CookieService } from 'ngx-cookie-service';
import { KorisnikService } from './services/korisnik.service';
import { RestoranService } from './services/restoran.service';
import { ObrokService } from './services/obrok.service';
import { NarudzbinaService } from './services/narudzbina.service';
import { GradoviService } from './services/gradovi.service';
import { DodatakObrokuService } from './services/dodatakObroku.service';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material';

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
import { UsloviKoriscenjaComponent } from './components/uslovi-koriscenja/uslovi-koriscenja.component';
import { ZaboravljenaLozinkaComponent } from './components/auth/prijava/zaboravljena-lozinka/zaboravljena-lozinka.component';
import { PrikazRestoranaComponent } from './components/prikaz-restorana/prikaz-restorana.component';
import { ScrollComponent } from './components/scroll/scroll.component';


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
    KarticeComponent,
    UsloviKoriscenjaComponent,
    ZaboravljenaLozinkaComponent,
    PrikazRestoranaComponent,
    ScrollComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    RoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    BarRatingModule
  ],
  providers: [
    CookieService,
    KorisnikService,
    RestoranService,
    ObrokService,
    NarudzbinaService,
    GradoviService,
    DodatakObrokuService,
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2000}}
  ],
  bootstrap: [AppComponent],
  entryComponents: [ZaboravljenaLozinkaComponent]
})
export class AppModule { }
