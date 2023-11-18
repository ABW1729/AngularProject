// Your dashboard component TypeScript file
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(private router: Router, public authService: AuthService) {}

  navigateToAssignment1() {
    this.router.navigate(['/assignment1']);
  }

  navigateToAssignment2() {
    this.router.navigate(['/assignment2']);
  }
  ngOnInit(): void {}
}

  

