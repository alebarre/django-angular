import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'members-frontend';

  public selectedMember?: any = [];

  constructor(private api: ApiService,
              private router: Router){}

  ngOnInit(): void {
      this.getMembers();
  }

  members = [
    {name: 'Member 01', id: 1, surname: 'ciclano', photo: 'http://www.minhaapp.com/photo1'},
    {name: 'Member 02', id: 2, surname: 'beltrano', photo: 'http://www.minhaapp.com/photo2'},
    {name: 'Member 03', id: 3, surname: 'fulano', photo: 'http://www.minhaapp.com/photo3'}
  ]

  getMembers = () => {
    this.api.getAllMembers().subscribe(
      data => {
        this.members = data
      },
      error => {
        console.log("Aconteceu um erro", error);
      }
    )
  }

  memberClicked(id: number){
    this.router.navigate(['member-detail', id])
  }

}
