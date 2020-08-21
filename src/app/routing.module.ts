import { NgModule } from "@angular/core";
import { Routes, RouterModule} from "@angular/router";
import { RegistracijaComponent } from './components/auth/registracija/registracija.component';
import { Page404Component } from './components/page404/page404.component';
import { PrijavaComponent } from './components/auth/prijava/prijava.component';
import { PocetnaComponent } from './components/pocetna/pocetna.component';
import { ProfilComponent } from './components/profil/profil.component';
import { NarudzbineComponent } from './components/narudzbine/narudzbine.component';
import { OmiljenaHranaComponent } from './components/omiljena-hrana/omiljena-hrana.component';
import { OmiljeniRestoraniComponent } from './components/omiljeni-restorani/omiljeni-restorani.component';
import { AdreseComponent } from './components/adrese/adrese.component';
import { UtisciComponent } from './components/utisci/utisci.component';
import { KarticeComponent } from './components/kartice/kartice.component';
import { UsloviKoriscenjaComponent } from './components/uslovi-koriscenja/uslovi-koriscenja.component';
import { PrikazRestoranaComponent } from './components/prikaz-restorana/prikaz-restorana.component';

const rute: Routes = [
    {path:'', component:PocetnaComponent},
    {path:'registracija', component: RegistracijaComponent},
    {path:'prijava', component: PrijavaComponent},
    {path:'profil', component: ProfilComponent},
    {path:'narudzbine', component: NarudzbineComponent},
    {path:'omiljena-hrana', component: OmiljenaHranaComponent},
    {path:'omiljeni-restorani', component: OmiljeniRestoraniComponent},
    {path:'adrese', component: AdreseComponent},
    {path:'utisci', component: UtisciComponent},
    {path:'kartice', component: KarticeComponent},
    {path: '404', component: Page404Component},
    {path: 'uslovi-koriscenja', component: UsloviKoriscenjaComponent},
    {path: 'prikaz-restorana', component: PrikazRestoranaComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(rute)],
    exports:[RouterModule]
})

export class RoutingModule {}