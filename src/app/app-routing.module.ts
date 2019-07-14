import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserInfoModule} from './user-info/user-info.module'
const routes: Routes = [
  {path:"userInfo" , loadChildren:"./user-info/user-info.module#UserInfoModule"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
