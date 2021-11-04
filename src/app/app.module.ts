import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomersListComponent } from './customers/customers-list/customers-list.component';
import { FilterTextboxComponent } from './customers/customers-list/filter-textbox/filter-textbox.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { CustomersRoutingModule } from './customers/customers-routing.module';
import { OrdersComponent } from './orders/orders.component';
import { OrdersRoutingModule } from './orders/orders.routing.module';

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    CustomersListComponent,
    FilterTextboxComponent,
    OrdersComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    CoreModule,
    AppRoutingModule,
    CustomersRoutingModule,
    OrdersRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
