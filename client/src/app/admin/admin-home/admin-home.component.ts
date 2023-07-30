import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent {

  userCount : number = 0;
  transactionCount: number = 0;
  depostsCount: number = 0;
  loansCount: number = 0;

  constructor (private http: HttpClient) {}

  ngOnInit():void {
    this.http.get<any[]>('http://localhost:6001/fetch-users').subscribe(
      (response: any)=>{
        this.userCount = response.length;
      }
    );
    this.http.get<any[]>('http://localhost:6001/transactions').subscribe(
      (response: any)=>{
        this.transactionCount = response.length;
      }
    );
    this.http.get<any[]>('http://localhost:6001/fetch-deposits').subscribe(
      (response: any)=>{
        this.depostsCount = response.length;
      }
    );
    this.http.get<any[]>('http://localhost:6001/fetch-loans').subscribe(
      (response: any)=>{
        this.loansCount = response.length;
      }
    );
  }


}
