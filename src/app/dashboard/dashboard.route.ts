import { OrderListComponent } from './order-list/order-list.component';
import { ProductListComponent } from './product-list/product-list.component';
import { Routes } from '@angular/router';
import { DashboardNavigationComponent } from './dashboard-navigation/dashboard-navigation.component';
import { GownComponent } from './gown/gown.component';
import { KurthaComponent } from './kurtha/kurtha.component';
import { LehengaComponent } from './lehenga/lehenga.component';
import { SariComponent } from './sari/sari.component';
import { ReturnListComponent } from './return-list/return-list.component';
import { EditComponent } from './edit/edit.component';
import { ProductAddComponent } from './product-add/product-add.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardNavigationComponent,
    children: [
      {
        path: '',
        redirectTo: 'product',
        pathMatch: 'full',
      },
      {
        path: 'product',
        component: ProductListComponent,
      },
      {
        path: 'order',
        component: OrderListComponent,
      },
      {
        path: 'return',
        component: ReturnListComponent,
      },
      {
        path: 'sari',
        component: SariComponent,
      },
      {
        path: 'lehenga',
        component: LehengaComponent,
      },
      {
        path: 'gown',
        component: GownComponent,
      },
      {
        path: 'kurtha',
        component: KurthaComponent,
      },
      {
        path: 'edit',
        component: EditComponent,
      },
      {
        path: 'product/add',
        component: ProductAddComponent,
      },
    ],
  },
];
