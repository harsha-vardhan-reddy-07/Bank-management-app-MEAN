import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-all-deposits',
  templateUrl: './all-deposits.component.html',
  styleUrls: ['./all-deposits.component.css']
})
export class AllDepositsComponent {

  deposits: any[] = [];

  constructor(private http: HttpClient){}


  ngOnInit() : void {
    this.http.get<any[]>(`http://localhost:6001/fetch-deposits`).subscribe(
      (response) => {
        console.log(response);
        this.deposits = response;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

}
