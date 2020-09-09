import { Order } from './order.model';
import { Cart } from './cart.model';

import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RestService } from './rest.service';
import { ProductRepository } from './product.repository';
import { CategoryRepository } from './category.repository';
import { OrderRepository } from './order.repository';

@NgModule({
    imports: [HttpClientModule],
    providers: [
        RestService,
        ProductRepository,
        CategoryRepository,
        Cart,
        Order,
        OrderRepository
    ]
})

export class ModelModule { }