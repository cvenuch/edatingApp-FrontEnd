import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../service/user-data.service';

export class Users{
  constructor(public id:number,
    public interests:interest){ }
}

export class interest{
  constructor(public likes: string,
    public dislikes:string,
    public hobbies:string,
    public profileurl:string,
    public about:string){}
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users:Users[] = [];

  constructor(private userDataService : UserDataService) { }

  ngOnInit(): void {
    this.userDataService.getAllUsers().subscribe(response =>  {
      this.users= response;
    })
  }

}
