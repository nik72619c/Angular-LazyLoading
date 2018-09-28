import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyComponent } from './lazy/lazy.component';
import {RouterModule, Routes} from '@angular/router';


const appRoutes: Routes=[
  {
    path: '', component:LazyComponent
  }
]
@NgModule({
  imports: [
    CommonModule,RouterModule.forChild(appRoutes
      
    )
  ],
  declarations: [LazyComponent]
})


export class LazyModule { }
