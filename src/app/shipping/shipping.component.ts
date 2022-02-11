import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

// Composent qui représente les frais de transport

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css'],
})
export class ShippingComponent implements OnInit {
  shippingCosts = this.cartService.getShippingPrices();

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}
}
