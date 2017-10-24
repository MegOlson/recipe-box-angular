import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>Recipe Box</h1>
      <ul>
        <li *ngFor="let currentRecipe of recipes">
          <h2>{{currentRecipe.title}}</h2>
          <h3>Ingredients</h3>
          <ul>
            <li *ngFor="let currentIngredient of currentRecipe.ingredients">{{currentIngredient}}</li>
          </ul>
          <h3>Instructions</h3>
          <p>{{currentRecipe.instructions}}</p>
        </li>
     </ul>
    </div>
  `
})

export class AppComponent {
  recipes: Recipe[] = [
    new Recipe(
      "Mac N Cheese",
      ["Mac", "Cheese"],
      "Add Cheese to Mac. Heat and Serve."
    )
  ]
}

export class Recipe {
  constructor(public title: string, public ingredients: string[], public instructions: string) {}
}
