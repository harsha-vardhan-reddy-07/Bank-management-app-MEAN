import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-all-loans',
  templateUrl: './all-loans.component.html',
  styleUrls: ['./all-loans.component.css']
})
export class AllLoansComponent {
  loans : any[] = [];

  constructor(private http:HttpClient){}

  ngOnInit():void {
    
    this.fetchLoans();
      
  }

  private fetchLoans(){
    this.http.get<any[]>(`http://localhost:6001/fetch-loans`).subscribe(
        (response) => {
          console.log(response);
          this.loans = response;
        },
        (error: any) => {
          console.error(error);
        }
      );
  }

  loanApprove(id: string){
    this.http.put(`http://localhost:6001/approve-loan`, {id}).subscribe(
        (response: any) => {
          alert("loan approved");
          this.fetchLoans();
        },
        (error: any) => {
          console.error(error);
        }
    );
  }

  loanDecline(id: string){
    this.http.put(`http://localhost:6001/decline-loan`, id).subscribe(
        (response: any) => {
          alert("loan declined");
          this.fetchLoans();
        },
        (error: any) => {
          console.error(error);
        }
    );
  }

}
