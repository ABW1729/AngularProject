import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [HomeComponent],
  imports: [FormsModule,CommonModule, HttpClientModule,RouterModule],
})
export class Assignment2Module {}
