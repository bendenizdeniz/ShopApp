import { OrderRepository } from './../../model/order.repository';
import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/model/order.model';
import { NgForm } from '@angular/forms';
import { registerLocaleData } from '@angular/common';

@Component({
  selector: 'check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {

  orderSent: boolean = false;
  submitted: boolean = false;

  constructor(public order: Order, private orderRepository: OrderRepository) { }

  ngOnInit(): void {
  }

  submitOrder(form: NgForm) {
    this.submitted = true;
    if (form.valid) {
      this.orderRepository.saveOrder(this.order)
        .subscribe(order => {
          this.order.clearOrder();
          this.orderSent = true;
          this.submitted = false;
        })
    }

  }

}
