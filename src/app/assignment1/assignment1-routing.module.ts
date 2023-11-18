// assignment1-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Q1Component } from './q1/q1.component';
import { Q2Component } from './q2/q2.component';
import { Q3Component } from './q3/q3.component';
import { Q4Component } from './q4/q4.component';
import { Q5Component } from './q5/q5.component';
import { Q6Component } from './q6/q6.component';
import { Q7Component } from './q7/q7.component';
import { Q8Component } from './q8/q8.component';
import { Q9Component } from './q9/q9.component';



const assignment1Routes: Routes = [
 { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'q1', component: Q1Component },
  { path: 'q2', component: Q2Component },
  { path: 'q3', component: Q3Component },
  { path: 'q4', component: Q4Component },
  { path: 'q5', component: Q5Component },
  { path: 'q6', component: Q6Component },
  { path: 'q7', component: Q7Component },
  { path: 'q8', component: Q8Component },
  { path: 'q9', component: Q9Component },
  
];

@NgModule({
  imports: [RouterModule.forChild(assignment1Routes)],
  exports: [RouterModule],
})
export class Assignment1RoutingModule {}

