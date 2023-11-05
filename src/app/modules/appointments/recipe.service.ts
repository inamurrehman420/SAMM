import { Injectable } from '@angular/core';
import { REQUESTTYPE } from 'src/app/models/enum/request-type.enum';
import { DataService } from 'src/app/shared/http/data.service';
@Injectable({
  providedIn: 'root'
})
export class RecipeService {


  constructor(private _dataService: DataService) { }

  GetRecipe(obj:any) {
    return this._dataService.genericServiceCaller(REQUESTTYPE.POST, 'recipe/get-all-recipes', obj)
  }

  AddUpdateRecipe(formData: any) {
    debugger
    return this._dataService.genericServiceCaller(REQUESTTYPE.POST, 'recipe/add-update-recipe', formData)
  }

  RemoveRecipe(id: any) {
    return this._dataService.genericServiceCaller(REQUESTTYPE.GET, `recipe/delete-recipe/${id}`)
  }

  GetIngrediantsByRecipeId(id: any) {
    return this._dataService.genericServiceCaller(REQUESTTYPE.GET, `recipe/recipe-detail/${id}`)
  }
  UploadPic(recipe_id, file: File) {
    var formData = new FormData();
    formData.append('recipe_id', recipe_id);
    formData.append('file', file);    
    return this._dataService.genericServiceCaller(REQUESTTYPE.POST, 'recipe/upload-recipe', formData)    
}

}
