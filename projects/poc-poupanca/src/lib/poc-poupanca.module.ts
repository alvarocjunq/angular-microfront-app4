import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PocPoupancaComponent } from './poc-poupanca.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: 'home', children: [{ path: '', component: PocPoupancaComponent, outlet: 'tf-poc-poupanca' }] }
];

@NgModule({
  declarations: [PocPoupancaComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule, PocPoupancaComponent]
})
export class PocPoupancaModule { }
