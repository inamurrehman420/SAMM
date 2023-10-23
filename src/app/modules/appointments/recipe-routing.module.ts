import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddRecipeComponent } from "./add-recipe/add-recipe.component";
import { RecipeComponent } from "./recipe-list/recipe.component";

const routes: Routes = [
  {
    path: "",
    component: RecipeComponent,
  },

  {
    path: "add-recipe",
    component: AddRecipeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipeModuleRoutingModule {}
