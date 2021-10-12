import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('First recipe', 'This is our first recipe', 'https://images.pexels.com/photos/1640771/pexels-photo-1640771.jpeg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
