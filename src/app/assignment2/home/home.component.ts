import { Component } from '@angular/core';
import { CountriesService } from '../country.service';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-countries',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  countries: any = [];
  displayCountries: any = [];
  searchText:String = "";

  constructor(private country: CountriesService,public authService: AuthService) {}

  ngOnInit(): void {
    this.getAllCountries();
  }

  getAllCountries() {
    this.country.getAll().subscribe(
      (success) => {
        console.log('success ===>>>>', success);
        this.countries = success;
        this.displayCountries = this.countries;
      },
      (error) => {
        console.log('error ===>>>>', error);
      }
    );
  }

  searchCountryByName() {
    this.displayCountries = this.countries.filter((cc: any) =>
      cc.name.official.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}
