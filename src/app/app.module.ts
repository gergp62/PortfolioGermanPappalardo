import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { SkilsComponent } from './componentes/skils/skils.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { HttpClientModule } from '@angular/common/http';
import { PortfolioService } from './servicios/portfolio.service';
import { LoginService } from './servicios/login.service';
import { ItemEducacionComponent } from './componentes/educacion/item-educacion/item-educacion.component';
import { ItemProyectoComponent } from './componentes/proyectos/item-proyecto/item-proyecto.component';
import { FormsModule } from '@angular/forms';
import { ItemExperienciaComponent } from './componentes/experiencia/item-experiencia/item-experiencia.component';
import { ItemSkilsComponent } from './componentes/skils/item-skils/item-skils.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EncabezadoComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkilsComponent,
    ProyectosComponent,
    ItemEducacionComponent,
    ItemProyectoComponent,
    ItemExperienciaComponent,
    ItemSkilsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ],
  providers: [LoginService, PortfolioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
