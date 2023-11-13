import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent {
  @Input() rating: number=0;

  calculateStarDisplay(index: number): 'filled' | 'half-filled' | 'empty' {
    const roundedRating = Math.round(this.rating);
    
    if (index < roundedRating) {
      return 'filled';
    } else if (index === roundedRating && this.rating - roundedRating >= 0.5) {
      return 'half-filled';
    } else {
      return 'empty';
    }
  }
}
