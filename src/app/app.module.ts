import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { SobreComponent } from './sobre/sobre.component';
import { ExperienciasComponent } from './experiencias/experiencias.component';
import { EducacaoComponent } from './educacao/educacao.component';
import { FormatarTelefonePipe } from './pipes/formatar-telefone.pipe';
import { FormatarCpfPipe } from './pipes/formatar-cpf.pipe';
import { ExerciciosComponent } from './exercicios/exercicios.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SobreComponent,
    ExperienciasComponent,
    EducacaoComponent,
    FormatarTelefonePipe,
    FormatarCpfPipe,
    ExerciciosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
