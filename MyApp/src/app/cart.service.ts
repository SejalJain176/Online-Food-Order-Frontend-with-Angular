import { Injectable } from '@angular/core';
import { Cart } from './shared/models/cart';
import { Foods } from './shared/models/Food';
import { CartItem } from './shared/models/cartItem';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: Cart = new Cart();
  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject<Cart>(this.cart);

  constructor() { }

  addToCart(food: Foods): void {
    let cartItem = this.cart.items.find(item => item.food.id == food.id);

    if (cartItem) {
      this.changeQuantity(cartItem.quantity +1, food.id);
      return;
    }

    this.cart.items.push(new CartItem(food));
    this.notifyCartChanges();
  }

  changeQuantity( foodId: number,quantity: number): void {
    debugger
    let cartItem = this.cart.items.find(item => item.food.id == foodId);

    if (!cartItem) return;

    cartItem.quantity = quantity;
    console.log("quantity2" , quantity)
    this.notifyCartChanges();
  }

  removeFromCart(foodId: number): void {
    this.cart.items = this.cart.items.filter(item => item.food.id != foodId);
    this.notifyCartChanges();
  }

  getCart(): Observable<Cart> {
    return this.cartSubject.asObservable();
  }

  private notifyCartChanges(): void {
    this.cartSubject.next(this.cart);
  }
}
