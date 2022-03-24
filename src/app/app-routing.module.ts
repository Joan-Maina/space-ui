import { PageoneComponent } from './pages/pageone/pageone.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagetwoComponent } from './pages/pagetwo/pagetwo.component';
import { PagethreeComponent } from './pages/pagethree/pagethree.component';
import { PagefourComponent } from './pages/pagefour/pagefour.component';

const routes: Routes = [

  {
    component: PagetwoComponent,
    path: 'destination',
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    component: PageoneComponent,
    path: 'home'
  },
  {
    component: PagethreeComponent,
    path: 'crew'
  },
  {
    component: PagefourComponent,
    path: 'technology'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
