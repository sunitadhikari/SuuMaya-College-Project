import { ProductDetailComponent } from './../product-detail/product-detail.component';
import { OrderListComponent } from './order-list/order-list.component';
import { ProductListComponent } from './product-list/product-list.component';
import { Routes } from '@angular/router';
import { DashboardNavigationComponent } from './dashboard-navigation/dashboard-navigation.component';
import { ReturnListComponent } from './return-list/return-list.component';
import { EditComponent } from './edit/edit.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductEditComponent } from './product-edit/product-edit.component';

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
        path: 'edit',
        component: EditComponent,
      },
      {
        path: 'product/add',
        component: ProductAddComponent,
      },
      {
        path: 'product/detail',
        component: ProductDetailComponent,
      },
      {
        path: 'product/edit',
        component: ProductEditComponent,
      },
    ],
  },
];
