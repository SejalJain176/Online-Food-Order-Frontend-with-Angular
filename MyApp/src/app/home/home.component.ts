import { Component } from '@angular/core';
import { FoodServiceService } from '../food/food-service.service';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  foods: any[]=[];

  constructor(private FoodService: FoodServiceService){
    
  }

  ngOnInit():void{

    this.foods = this.FoodService.getAll();

  }
}
