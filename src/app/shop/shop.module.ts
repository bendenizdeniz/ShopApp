import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModelModule } from '../model/model.module';
import { BrowserModule } from '@angular/platform-browser';
import { ShopComponent } from './shop.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { CartDetailComponent } from './cart-detail/cart-detail.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CategoryListComponent } from './category-list/category-list.component';


@NgModule({
    declarations: [ShopComponent, NavbarComponent, CartSummaryComponent, CartDetailComponent, CheckOutComponent, ProductListComponent, CategoryListComponent],
    imports: [ModelModule, BrowserModule, FormsModule,RouterModule],
    exports: [ShopComponent, CheckOutComponent, CartDetailComponent]
})
export class ShopModule { } 