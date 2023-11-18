import { Injectable } from '@angular/core';
import { Foods } from '../shared/models/Food';
import { Tags } from '../shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodServiceService {


 
  constructor() { }
  getFoodById(id: number): Foods {
  
    return this.getAll().find(food => food.id==id)!
  }

  getAllTags(): Tags[] {

    return [
      {
        name: "All",
        count: 4
      },

      {
        name: "Lunch",
        count: 2,
        

      },

      {
        name:"Healthy",
        count:3
      },

      {
        name:"Breakfast",
        count:1
      }

    ]
  }

  getAllFoodByTag(tag: string): Foods[] {

    return tag == "All" ? this.getAll() : this.getAll().filter(food => food.tags?.includes(tag))

  }
  getAll() {
    return [
      {
        id: 1,
        price: 20,
        name: "Saucy Penne Pasta ",
        favourite: false,
        star: 3.5,
        tags: ['FastFood'],
        imageUrl: 'assets/pasta.jpg',
        cookTime: "20-30 min",
        origins: ['Italian']
      },

      {
        id: 2,
        price: 20,
        name: "Aloo Sandwich",
        favourite: false,
        star: 4.5,
        tags: ['Breakfast', 'Healthy'],
        imageUrl: 'assets/side-view-club-sandwich-with-salted-cucumbers-lemon-olives-round-white-plate.jpg',
        cookTime: "10-15 min",
        origins: ['Indian']
      },


      {
        id: 3,
        price: 20,
        name: "Punjabi Daal Makhni",
        favourite: false,
        star: 4.0,
        tags: ['Lunch', 'Healthy'],
        imageUrl: 'assets/daal.jpg',
        cookTime: "20-30 min",
        origins: ['Indian']
      },

      {
        id: 4,
        price: 20,
        name: "Paneer Butter Masala",
        favourite: true,
        star: 4.5,
        tags: ['Lunch', 'Healthy'],
        imageUrl: 'assets/vertical-shot-traditional-indian-paneer-butter-masala-cheese-cottage-curry-black-surface.jpg',
        cookTime: "20-30 min",
        origins: ['Indian']
      }

    ]
  }
}
