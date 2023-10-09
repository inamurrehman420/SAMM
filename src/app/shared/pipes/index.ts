
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { TextTruncatePipe } from './truncate-text.pipe';


const PIPES = [
  TextTruncatePipe
];
  
// const PIPES_MODULES = [NgPipesModule, NgxMaskModule.forRoot(), CommonModule];

@NgModule({
  declarations: PIPES,
//   imports: PIPES_MODULES,
  exports: [...PIPES]
})
export class PipesModule {}
