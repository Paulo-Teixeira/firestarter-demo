import { NgModule } from '@angular/core';
import { CustomersRoutingModule } from './customers-routing.module';
import { ListPageComponent } from './list-page/list-page.component';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ListPageComponent, DetailPageComponent],
  imports: [CustomersRoutingModule, SharedModule]
})
export class CustomersModule {}
