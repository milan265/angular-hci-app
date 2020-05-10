import { NgModule } from "@angular/core";
import { Routes, RouterModule} from "@angular/router";
import { RegistracijaComponent } from './components/auth/registracija/registracija.component';
import { Page404Component } from './components/page404/page404.component';
import { PrijavaComponent } from './components/auth/prijava/prijava.component';
import { PocetnaComponent } from './components/pocetna/pocetna.component';

const rute: Routes = [
    {path:'', component:PocetnaComponent},
    {path:'registracija', component: RegistracijaComponent},
    {path:'prijava', component:PrijavaComponent},
    {path: '404', component: Page404Component}
];

@NgModule({
    imports:[RouterModule.forRoot(rute)],
    exports:[RouterModule]
})

export class RoutingModule {}