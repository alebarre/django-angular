import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-new-member',
  templateUrl: './new-member.component.html',
  styleUrls: ['./new-member.component.css']
})
export class NewMemberComponent implements OnInit{

  public member = {name: '', surname: '', adress: '', phone: ''}

  constructor(private api: ApiService,
              private appComponent: AppComponent){}

  ngOnInit(): void {

  }

  save(){
    this.api.saveMember(this.member).subscribe(
      data => {
        this.appComponent.members.push(data)
      },
      error => {
        console.log("Aconteceu um erro", error.message)
      }
    )
  }

}
