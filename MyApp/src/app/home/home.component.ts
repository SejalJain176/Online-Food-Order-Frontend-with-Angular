import { Component, Input, Output } from '@angular/core';
import { FoodServiceService } from '../food/food-service.service';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  foods: any[]=[];

  constructor(private FoodService: FoodServiceService, private route: ActivatedRoute){
    
  }

  @Input() Rating: number = 0;

  ngOnInit():void{

    this.foods = this.FoodService.getAll();

    this.route.params.subscribe( params =>{

      if(params['searchItem']){
        this.foods = this.FoodService.getAll().filter( food =>
          food.name.toLowerCase().includes(params['searchItem'].toLowerCase())
        )

      }
      else
       this.foods = this.FoodService.getAll()
    })

  

  }
}
