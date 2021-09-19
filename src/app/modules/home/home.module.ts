import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeIndexComponent } from './home-index/home-index.component';
import {MatButtonModule} from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MovieItemComponent } from './movie-item/movie-item.component';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HomeIndexComponent,
    MovieItemComponent
  ],
  imports: [
    CommonModule,MatButtonModule,FlexLayoutModule,MatCardModule, HttpClientModule, RouterModule,
  ],
  exports: [
    HomeIndexComponent
  ]
})
export class HomeModule { }
