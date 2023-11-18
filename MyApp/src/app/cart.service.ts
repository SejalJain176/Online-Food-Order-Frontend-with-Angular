import { Injectable } from '@angular/core';
import { Cart } from './shared/models/cart';
import { Foods } from './shared/models/Food';
import { CartItem } from './shared/models/cartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  private cart:Cart = new Cart();

  addToCart(food:Foods):void{

    let cartItem = this.cart.items.find(item => item.food.id==food.id)

    if(cartItem){
      this.changeQuantity(food.id,cartItem.quantity+1)
      return;
    }

    this.cart.items.push(new CartItem(food))
    
  }
  changeQuantity(quantity: number, foodId: number) {
   
    let cartItem = this.cart.items.find(item=>item.food.id == foodId);

    if(!cartItem) return;

    cartItem.quantity=quantity
  }

  removeFromCart(foodId:number):void{

    this.cart.items = this.cart.items.filter(item=> item.food.id!=foodId)

  }

  getCart():Cart{

    return this.cart;
  }
}