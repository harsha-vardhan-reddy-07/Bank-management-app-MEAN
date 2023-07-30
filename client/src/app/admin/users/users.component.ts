import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  users: any[] = [];

  constructor (private http: HttpClient){}

  ngOnInit(): void {
    
    this.http.get<any[]>('http://localhost:6001/fetch-users').subscribe(
      (response)=>{
        this.users = response;
      }, (error) =>{
        console.log(error);
      }
    )
    
  }

}
