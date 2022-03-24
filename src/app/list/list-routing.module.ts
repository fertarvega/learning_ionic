import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListPage } from './list.page';
import { DetailsPage } from '../details/details.page';

const routes: Routes = [
  {
    path: '',
    component: ListPage
  },
  {
    path: 'details/:name',
    component: DetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListPageRoutingModule {}
