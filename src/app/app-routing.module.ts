import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducacaoComponent } from './educacao/educacao.component';
import { ExerciciosComponent } from './exercicios/exercicios.component';
import { ExperienciasComponent } from './experiencias/experiencias.component';
import { SobreComponent } from './sobre/sobre.component';

const routes: Routes = [
  {path: '', redirectTo: 'header', pathMatch:'full'},
  {path: 'sobre', component:SobreComponent},
  {path: 'exercicios', component:ExerciciosComponent},
  {path: 'experiencia', component:ExperienciasComponent},
  {path: 'educacao', component:EducacaoComponent}
]

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
