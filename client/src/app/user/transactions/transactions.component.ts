import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent {

  transactions : any[] = [];

  userId: string|null = localStorage.getItem('userid');

  constructor(private http:HttpClient){}

  ngOnInit():void {

    this.http.get<any[]>(`http://localhost:6001/transactions/`).subscribe(
          (response) => {
            console.log(response);
            this.transactions = response;
          },
          (error: any) => {
            console.error(error);
          }
    );
  }
}
