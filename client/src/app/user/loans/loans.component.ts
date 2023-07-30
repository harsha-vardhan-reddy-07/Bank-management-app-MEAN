import { HttpClient } from '@angular/common/http';
import { Component, SimpleChanges } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.css']
})
export class LoansComponent {

  userid: string | null = localStorage.getItem('userid');
  username: string | null = localStorage.getItem('username');
  loanType: string = '';
  nomineeName: string = '';
  nomineeAge: number = 0;
  loanAmount: number = 0;
  duration: number = 0;

  rePayId: string =  '';
  rePayAmount: number = 0;

  loans: any[] = [];

  newLoanDetails = {};

constructor(private http: HttpClient, private route: Router){
  this.userid = localStorage.getItem('userid');
    this.username = localStorage.getItem('username');
}

  ngOnInit():void{
    this.userid = localStorage.getItem('userid');
    this.fetchLoans();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['userid']) {
      this.fetchLoans();
    }
  }

  private fetchLoans(){
    if(this.userid){
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
  }

  createNewLoans(){
    
    this.newLoanDetails = {loanType: this.loanType, customerId: this.userid, 
                            customerName: this.username, nomineeName: this.nomineeName, 
                            nomineeAge: this.nomineeAge, duration: this.duration, 
                            loanAmount: this.loanAmount, createdDate: new Date()};

    this.http.post('http://localhost:6001/new-loan', this.newLoanDetails).subscribe(
      (response) =>{
        console.log(response);
        this.loanType = '';
        this.nomineeName = '';
        this.nomineeAge = 0;
        this.loanAmount = 0;
        this.duration = 0;
        alert("new deposit created");
        this.fetchLoans();
      }
    )
  }

  makePayment(id: string){

    const paymentData = {id, amount: this.rePayAmount}
    this.http.post('http://localhost:6001/repay-loan', paymentData).subscribe(
      (response) =>{
        alert("loan payment successful");
        this.rePayId =  '';
        this.rePayAmount = 0;
        this.fetchLoans();
      }
    )
  }


}
 