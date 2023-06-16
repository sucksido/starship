// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-cart-details',
//   templateUrl: './cart-details.component.html',
//   styleUrls: ['./cart-details.component.css']
// })
// export class CartDetailsComponent {

// }
import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {
  cartItems: Product[] | undefined;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
  }

  removeFromCart(product: Product) {
    // Implement remove from cart logic here
  }
}
