import { Routes } from '@angular/router';
import {LoginComponent} from "./page/admin/login/login.component";
import {LayoutComponent} from "./page/admin/layout/layout.component";
import {ProductComponent} from "./page/admin/product/product.component";


export const routes: Routes = [

  {
    path:'',
    redirectTo: 'login',
    pathMatch:'full'
  },
  {
     path:'login',
     component:LoginComponent
  },
  {
    path:'',
    component:LayoutComponent,
    children:[
      {
        path:'products',
        component:ProductComponent
      }

    ]
  }
];
