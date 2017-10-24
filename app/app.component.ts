import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>Recipe Box</h1>
      <ul>
        <li *ngFor="let currentRecipe of recipes">
          <h2 (click)="showDetails(currentRecipe)">{{currentRecipe.title}}</h2>
        </li>
     </ul>
     <div *ngIf="selectedRecipe">
       <h3>Ingredients:</h3>
       <ul>
         <li *ngFor="let currentIngredient of selectedRecipe.ingredients">{{currentIngredient}}</li>
       </ul>
       <h3>Instructions:</h3>
       <p>{{selectedRecipe.instructions}}</p>
     </div>
    </div>
  `
})

export class AppComponent {
  selectedRecipe: Recipe;
  recipes: Recipe[] = [
    new Recipe(
      "Mac N Cheese",
      ["Mac", "Cheese"],
      "Add Cheese to Mac. Heat and Serve."
    ),
    new Recipe(
      "Pizza",
      ["Crust", "Cheese", "Sauce"],
      "Add sauce and cheese to crust. Bake and eat."
    )
  ]
  showDetails(clickedRecipe: Recipe) {
    this.selectedRecipe = clickedRecipe;
  }
}

export class Recipe {
  constructor(public title: string, public ingredients: string[], public instructions: string) {}
}
