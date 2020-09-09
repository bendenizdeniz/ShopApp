import { ShopModule } from './shop/shop.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ShopComponent } from './shop/shop.component';
import { CartDetailComponent } from './shop/cart-detail/cart-detail.component';
import { CheckOutComponent } from './shop/check-out/check-out.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ShopModule,
    RouterModule.forRoot([
      { path: 'shop', component: ShopComponent },
      { path: 'cart', component: CartDetailComponent },
      { path: 'checkout', component: CheckOutComponent },
      { path: '**', redirectTo: "/shop" }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
