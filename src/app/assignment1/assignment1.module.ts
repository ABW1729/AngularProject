import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Q1Component } from './q1/q1.component';
import { Q2Component } from './q2/q2.component';
import { Q3Component } from './q3/q3.component';
import { Q4Component } from './q4/q4.component';
import { Q5Component } from './q5/q5.component';
import { Q6Component } from './q6/q6.component';
import { Q7Component } from './q7/q7.component';
import { Q8Component } from './q8/q8.component';
import { Q9Component } from './q9/q9.component';
import { HomeComponent } from './home/home.component';
import { Assignment1RoutingModule } from './assignment1-routing.module';



@NgModule({
  declarations: [
    Q1Component,
    Q2Component,
    Q3Component,
    Q4Component,
    Q5Component,
    Q6Component,
    Q7Component,
    Q8Component,
    Q9Component,
    HomeComponent
  ],
  imports: [
    CommonModule,Assignment1RoutingModule
  ]
})
export class Assignment1Module { }
