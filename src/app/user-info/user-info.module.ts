import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDataComponent } from './user-data/user-data.component';
import { UserListComponent } from './user-list/user-list.component';

import {RouterModule,Routes} from '@angular/router';

const route:Routes = [
  {path:'userData',component:UserDataComponent},
  {path:'userList',component:UserListComponent}
];

@NgModule({
  declarations: [UserDataComponent, UserListComponent],
  imports: [
    CommonModule,RouterModule.forChild(route)
  ]
})
export class UserInfoModule { }
