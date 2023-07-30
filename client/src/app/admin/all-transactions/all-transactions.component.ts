import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-all-transactions',
  templateUrl: './all-transactions.component.html',
  styleUrls: ['./all-transactions.component.css']
})
export class AllTransactionsComponent {

  transactions : any[] = [];

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
