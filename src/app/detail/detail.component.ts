import { Component, Input } from '@angular/core';
import { BreweryData } from 'data-type';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
@Input() breweryData! : BreweryData  ;

 submitReview() {
  const reviewtext=document.getElementById("review-text") as any;
  const rating = document.querySelector('input[name="rating"]:checked') as any;
  
  

  const reviewResults = document.getElementById("review-results") as any;
  reviewResults.innerHTML = `Review: ${reviewtext.value}<br>Rating: ${rating.value} out of 5`;
}

}
