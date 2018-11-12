import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UserCreateComponent} from './Users/user-create/user-create.component';
import {UserListComponent} from './Users/user-list/user-list.component';
import {UserSearchComponent} from "./Users/user-search/user-search.component";

const routes: Routes = [
  {
    path: 'Home',
    component: UserListComponent,
    data: {title: 'User List'}
  },
  {
    path: 'List',
    component: UserListComponent,
    data: {title: 'User List'}
  },
  {
    path: 'Create',
    component: UserCreateComponent,
    data: {title: 'Create User'}
  },
  {
    path: 'Search',
    component: UserSearchComponent,
    data: {title: 'Search for User'}
  },
  {
    path: '',
    redirectTo: '/Home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
