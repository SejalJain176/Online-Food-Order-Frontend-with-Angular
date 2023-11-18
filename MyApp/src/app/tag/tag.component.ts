import { Component } from '@angular/core';
import { FoodServiceService } from '../food/food-service.service';
import { Tags } from '../shared/models/Tag';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent {
  tags: Tags[]=[];

  constructor(private fs:FoodServiceService){
    
  }

  ngOnInit():void{
    this.tags= this.fs.getAllTags();
    console.log(this.tags)

  }
  
}
