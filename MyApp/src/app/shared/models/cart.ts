import { CartItem } from "./cartItem";

export class Cart{

    items:CartItem[]=[];
    

    get totalPrice():number{

        let totalPrice =0;

        this.items.forEach(element => {
            totalPrice += element.price;
        });
        return totalPrice;
    }

}