import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { Cart } from '../shared/models/cart';
import { CartItem } from '../shared/models/cartItem';
import { FoodPageComponent } from '../food-page/food-page.component';
import { FoodServiceService } from '../food/food-service.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent {
  cart!: Cart;
  constructor(private cartService:CartService,private fs :FoodServiceService){
    this.setCart();
  }
  setCart() {
    this.cart=this.cartService.getCart()
  }

  removeFromCart(cartItem:CartItem){

    this.cartService.removeFromCart(cartItem.food.id);
    this.setCart()

  }

  changeQuantity(cartItem:CartItem,quantityInString:string){

    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id,quantity)
    this.setCart()

  }
}
