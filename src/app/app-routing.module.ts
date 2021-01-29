import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsSystemComponent } from './components/details-system/details-system.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [

  { path: 'inicio', component: HomeComponent },
  { path: 'detalles-de-sistema/:id', component: DetailsSystemComponent },
  { path: 'error', component: ErrorComponent },
  { path: '', pathMatch: 'full', redirectTo: 'inicio'  },
  { path: '**', pathMatch: 'full', redirectTo: 'error'  },

];



@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: "ignore",
    anchorScrolling:'enabled',
    scrollPositionRestoration: 'enabled',
    scrollOffset: [0, 64]
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
