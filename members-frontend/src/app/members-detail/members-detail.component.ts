import { AppComponent } from './../app.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-members-detail',
  templateUrl: './members-detail.component.html',
  styleUrls: ['./members-detail.component.css']
})
export class MembersDetailComponent implements OnInit{

  public selectedMember: any = [];

  public selectedId: any = '';

  constructor(private route: ActivatedRoute,
              private api: ApiService,
              private router: Router,
              private appComponent: AppComponent){ }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param: ParamMap) => {
      let id = parseInt(param.get('id') || '{}');
      this.selectedId = id;
      this.loadMember(this.selectedId);
    });

  }

  loadMember(memberId: any) {
    this.api.getMember(memberId).subscribe(
      data => {
        console.log(data);
        this.selectedMember = data;
      },
      error => {
        console.log("Aconteceu um erro", error.message)
      }
    )
  }

  update(){
    this.api.updateMember(this.selectedMember).subscribe(
      data => {
        this.selectedMember = data;
      },
      error => {
        console.log("Aconteceu um erro", error.message)
      }
    )
  }

  newMember(){
    this.router.navigate(['new-member']);
  }

  delete(){
    this.api.deleteMember(this.selectedId).subscribe(
      data => {
        let index = 0;
        this.appComponent.members.forEach((e, i) => {
          if (e.id == this.selectedId){
            index = i
          }
        })
        this.appComponent.members.splice(index, 1);
      },
      error => {
        console.log("Aconteceu um erro", error.message)
      }
    )
  }

}


