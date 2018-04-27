import {LeftNavComponent} from './left-nav.component';

export const MainRoutes = [
  {
    path:'',
    component:LeftNavComponent,
    children:[
      {path:'participant',loadChildren:''},
      {path:'address',loadChildren:''},
      {path:'speck',loadChildren:''},
      {path:'pmimpact',loadChildren:''},
      {path:'health',loadChildren:''},
      {path:'data',loadChildren:''}
    ]
  }
];
