import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
constructor(private router: Router,public authService: AuthService) {}

  navigateToQuestion(questionNumber: number) {
    this.router.navigate([`/assignment1/q${questionNumber}`]);
  }
}
