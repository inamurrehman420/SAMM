import { Component, OnInit, ViewChild } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { Subscription, finalize, pipe } from "rxjs";
import { RecipeService } from "../recipe.service";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: "app-add-recipe",
  templateUrl: "./add-recipe.component.html",
  styleUrls: ["./add-recipe.component.scss"],
})
export class AddRecipeComponent implements OnInit {
  selectedTime: any;
  recipeForm: FormGroup;
  private selectedFile: File;
  public avatarURL: any;
  visible: boolean=false;
  private routeSub : Subscription;
  id:any;
  Title="Add Recipe";
  edibleCounter:any;
  spicesCounter:any;

  constructor(
    private _formBuilder: FormBuilder,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private recipeService:RecipeService,
    private spinner: NgxSpinnerService,
  ) {}

  ngOnInit(): void {
    this.RecipeForm();
    
    this.routeSub  = this.route.params.subscribe(params => {
      if(params['id']){
        this.Title="Update Recipe"
        this.recipeForm.controls["recipe_id"].setValue(Number(params['id']));
        this.getIngrediants();
    }
    });   
  }

  removeImg(){
    this.avatarURL = null;
  }

  onFileChange(event) {
    if (event.target.files && event.target.files[0]) {
        var filesAmount = event.target.files.length;
        this.selectedFile = event.target.files[0];
        var Name = this.selectedFile.name.split('.').pop();
        if (Name != undefined) {
            if (Name.toLowerCase() == "jpg" || Name.toLowerCase() == "jpeg" || Name.toLowerCase() == "png") {
                var reader = new FileReader();

                reader.onload = (event: any) => {
                    this.avatarURL = event.target.result;
                    this.visible = false;
                }
                reader.readAsDataURL(this.selectedFile);
            } else {
                this.toastr.error("Only jpeg,jpg and png files are allowed");
                return;
            }
        }
    } else {
        this.visible = true;
    }
}

  UploadImage(){
    this.spinner.show();
    this.recipeService.UploadPic(this.recipeForm.get('recipe_id').value,this.selectedFile)
    .pipe(
        finalize(() => {
          this.spinner.hide();
        })
    )
    .subscribe((res) => {
        if (res.success === true) {
          this.toastr.success("Recipe Added Successfully", "Success");
        } else { 
          this.toastr.error('Something went wrong','Failed');
           
        }
    });    
  }

  getIngrediants(){
    this.spinner.show();
    this.recipeService.GetIngrediantsByRecipeId(this.recipeForm.controls["recipe_id"].value)
    .pipe(
        finalize(() => {
          this.spinner.hide();
        })
    ).subscribe((res) => {
        if (res.success === true) {  
          debugger        
        //  this.recipeForm.patchValue(res.data);
        if(res.data.recipe_pic)
        this.avatarURL = "http://localhost:7001"+res.data.recipe_pic;

         this.recipeForm.controls["recipe_id"].setValue(res.data.recipe_id);
         this.recipeForm.controls["recipe_name"].setValue(res.data.recipe_name);
         this.recipeForm.controls["recipe_description"].setValue(res.data.recipe_description);
         res.data.ingrediants.forEach(i => {
          this.ingrediants().push(this.newIngrediant(i.recipe_id,i.ingrediant_name,i.ingrediant_type,i.ingrediant_quantity,i.ingrediant_cooking_time,i.ingrediant_steering_type,i.ingrediant_temperature));
         });
          // this.toastr.success('Login Successfully','Success');
        } else { 
          this.toastr.error('Something went wrong','Failed');
           
        }
    });
  }


  onSubmit() {
    var edible=0;
    var spice=0;
    this.ingrediants().getRawValue().forEach(element => {
      if(element.ingrediant_type == '1'){
        edible++;
      }
      else if(element.ingrediant_type == '2'){
        spice++;
      }
      });
      if(edible>8){
        this.toastr.error("Maximum 8 edibles are allowed","Error")
        return;
      }
      if(spice>8){
        this.toastr.error("Maximum 8 spices are allowed","Error")
        return;
      }

    this.spinner.show();
    this.recipeService.AddUpdateRecipe(Object.assign({...this.recipeForm.value}))
    .pipe(
        finalize(() => {
          this.spinner.hide();
        })
    )
    .subscribe((res) => {
        if (res.success === true) {
          // this.toastr.success("User Added Successfully", "Success");
          // this.toastr.success('Login Successfully','Success');
          this.recipeForm.controls["recipe_id"].setValue(res.data.recipe_id);
          // this.toastr.success("Updated Successfully", "Success");
          if (this.avatarURL.includes('base64')) {
            this.UploadImage();
          }else{
            this.toastr.success("Updated Successfully", "Success");
          }
        } else { 
          this.toastr.error('Something went wrong','Failed');
           
        }
    });   
  }

  onClose() {
  //   this.dialogRef.close(true);
  }

// Dynamic Work
//   createform(){
//     this.featureForm = this._formBuilder.group({
//         Id:null,
//         MainIcon:null,
//         Headings: this._formBuilder.array([]),
//     });
// }

RecipeForm() {
  this.recipeForm = this._formBuilder.group({
    recipe_id: [0],
    recipe_name: ["", [Validators.required]],
    recipe_description: ["", [Validators.required]],
    ingrediants: this._formBuilder.array([]),
  });
}

ingrediants(): FormArray {
    return this.recipeForm.get('ingrediants') as FormArray;
}

newIngrediant(recipe_id= null,ingrediant_name= null,ingrediant_type= null,ingrediant_quantity= null,ingrediant_cooking_time= null,ingrediant_steering_type= null,ingrediant_temperature=null): FormGroup {
   
  return this._formBuilder.group({
      ingrediant_name:ingrediant_name,
      ingrediant_type: ingrediant_type,
      ingrediant_quantity:ingrediant_quantity,
      ingrediant_cooking_time:ingrediant_cooking_time,
      ingrediant_steering_type:ingrediant_steering_type,
      ingrediant_temperature:ingrediant_temperature,

    });
}

addIngrediants() {
    // @ts-ignore
    if (this.recipeForm.controls.ingrediants.length == 16) {
        this.toastr.error("Maximum 16 Ingrediants are allowed", "Error")
        return
    }

    this.ingrediants().push(this.newIngrediant());
}

removeIngrediants(empIndex: number) {
  
    this.ingrediants().removeAt(empIndex);
    // if(this.ingrediants().getRawValue().at(3).ingrediant_type == '1')
    //   this.edibleCounter--;
    // else if(this.ingrediants().getRawValue().at(3).ingrediant_type == '2')
    // this.spicesCounter--;
  
    // this.imageUrl.splice(empIndex,1);
    // this.images.splice(empIndex,1);
}
}
