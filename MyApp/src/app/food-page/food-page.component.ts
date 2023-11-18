import { Component } from '@angular/core';
import { FoodServiceService } from '../food/food-service.service';
import { Foods } from '../shared/models/Food';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent  {
  food!: Foods;

  constructor(private fs: FoodServiceService ,private activatedRoute: ActivatedRoute){

    this.activatedRoute.params.subscribe(params => {
      if(params['id']){
        this.food= this.fs.getFoodById(params['id'])
      }
    })
  }

  ngOnInit(){

   
  }
}
