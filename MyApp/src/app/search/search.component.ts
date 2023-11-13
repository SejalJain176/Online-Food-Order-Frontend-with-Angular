import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  searchItem:string='';

  constructor(private router:Router){

  }
  search():void{
    
    if(this.searchItem)
    this.router.navigateByUrl("/search/" + this.searchItem)

  }
}
