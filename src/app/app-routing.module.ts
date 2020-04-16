import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeHeaderComponent } from './home-header/home-header.component';


const routes: Routes = [
  { path: '', component: HomeHeaderComponent },
  { path: 'home', component: HomeHeaderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
