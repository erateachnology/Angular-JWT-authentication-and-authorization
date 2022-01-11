import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterResponse } from 'src/app/home-response';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  message = {
    message: String,
  };
  isPublished = false;
  isSuccess = '';
  constructor( private router: Router) {}

  ngOnInit(): void {}

  

  logOut() {
    console.log('Log out cleared');
    localStorage.removeItem('token');
    console.log('Cleared item' + localStorage.getItem('token'));
    this.router.navigate(['']);
  }

  

}
