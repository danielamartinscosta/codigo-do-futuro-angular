import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { SobreComponent } from './sobre/sobre.component';
import { ExperienciasComponent } from './experiencias/experiencias.component';
import { EducacaoComponent } from './educacao/educacao.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SobreComponent,
    ExperienciasComponent,
    EducacaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
