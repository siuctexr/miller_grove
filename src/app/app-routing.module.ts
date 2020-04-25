import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { TourMapComponent } from './tour-map/tour-map.component';
import { InteractiveTourComponent } from './interactive-tour/interactive-tour.component';
import { GalleryComponent } from './gallery/gallery.component';

import { WalkThroughComponent } from './walk-through/walk-through.component';

const routes: Routes = [
  { path: '', component: HomeHeaderComponent },
  { path: 'home', component: HomeHeaderComponent },
  { path: 'map', component: TourMapComponent },
  { path: 'tour', component: InteractiveTourComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'walkthrough', component: WalkThroughComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
