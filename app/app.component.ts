import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>Recipe Box</h1>
      <h3 id="header">Add to Recipes:</h3>
      <form class="form-group">
        <label for="newTitle">Title:</label>
        <input type="text" [(ngModel)]="newTitle" name="newTitle" class="form-control">
        <label for="newIngredients">Ingredients:</label>
        <input type="text" [(ngModel)]="newIngredients" name="newIngredients" class="form-control">
        <label for="newInstructions">Instructions:</label>
        <input type="text" [(ngModel)]="newInstructions" name="newInstructions" class="form-control">
        <button type="button" class="btn" (click)="addRecipe()" id="addRecipe">Add Recipe</button>
      </form>
      <div class="row">
        <div class="col-md-6">
          <div class="column-liner">
            <h2>Recipes:</h2>
            <ul>
              <li *ngFor="let currentRecipe of recipes">
                <h3 (click)="showDetails(currentRecipe)">{{currentRecipe.title}}</h3>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-6">
          <div class="column-liner">
            <div *ngIf="selectedRecipe">
              <h3>{{selectedRecipe.title}} <button type="button" class="btn" (click)="edit(selectedRecipe)">Edit Title</button></h3>
              <h3>Ingredients:</h3>
              <ul>
                <li *ngFor="let currentIngredient of selectedRecipe.ingredients">{{currentIngredient}}</li>
              </ul>
              <h3>Instructions:</h3>
              <p>{{selectedRecipe.instructions}}</p>
            </div>
            <div *ngIf="editRecipe">
              <form>
                <input [(ngModel)]="editRecipe.title" type="text" name="title">
                <button type="button" class="btn" (click)="doneEditing()">Done Editing</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})

export class AppComponent {
  selectedRecipe: Recipe;
  editRecipe: Recipe;
  newTitle: string;
  newIngredients: string;
  newInstructions: string;
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
    ),
    new Recipe(
      "Breakfast Cereal",
      ["Cereal", "Milk"],
      "Add cereal to bowl and pour appropriate amount of milk. Serve cold and enjoy."
    )
  ]
  showDetails(clickedRecipe: Recipe) {
    if (this.selectedRecipe === clickedRecipe){
      this.selectedRecipe = null;
    } else {
      this.selectedRecipe = clickedRecipe;
    }
  }
  edit(recipe: Recipe) {
    this.editRecipe = recipe;
  }
  doneEditing() {
    this.editRecipe = null;
  }
  addRecipe() {
    let newRecipe: Recipe = new Recipe(
      this.newTitle,
      this.newIngredients.split(","),
      this.newInstructions
    );
    this.recipes.push(newRecipe);
    this.newTitle = "";
    this.newIngredients = "";
    this.newInstructions = "";
  }
}

export class Recipe {
  constructor(public title: string, public ingredients: string[], public instructions: string) {}
}
