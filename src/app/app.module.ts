import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes, PreloadAllModules} from '@angular/router';
import { AppComponent } from './app.component';

const appRoutes:Routes=[

  {
    path: '', component: AppComponent
  },
  {
    path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule'
  }
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes,{
      preloadingStrategy: PreloadAllModules
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
