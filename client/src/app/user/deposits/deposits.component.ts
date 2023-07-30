import { HttpClient } from '@angular/common/http';
import { Component, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deposits',
  templateUrl: './deposits.component.html',
  styleUrls: ['./deposits.component.css']
})
export class DepositsComponent {

  userid: string | null = localStorage.getItem('userid');
  username: string | null = localStorage.getItem('username');
  depositName: string = '';
  nomineeName: string = '';
  nomineeAge: number = 0;
  depositAmount: number = 0;
  duration: number = 0;

  deposits: any[] = [];

  newDepositDetails = {};

  constructor(private http: HttpClient, private route: Router) {
    this.userid = localStorage.getItem('userid');
    this.username = localStorage.getItem('username');
  }

  ngOnInit(): void {
    
    this.userid = localStorage.getItem('userid');
    this.fetchDeposits();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['userid']) {
      this.fetchDeposits();
    }
  }


  private fetchDeposits(){

    if(this.userid){
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

  createNewDeposit(){
    
    this.newDepositDetails = {depositName: this.depositName, customerId: this.userid, 
                                customerName: this.username, nomineeName: this.nomineeName, 
                                nomineeAge: this.nomineeAge, duration: this.duration, 
                                  amount: this.depositAmount, createdDate: new Date()};

    this.http.post('http://localhost:6001/new-deposit', this.newDepositDetails).subscribe(
      (response) =>{
        console.log(response);
        this.depositName = '';
        this.nomineeName = '';
        this.nomineeAge = 0;
        this.depositAmount = 0;
        this.duration = 0;
        alert("new deposit created");
        this.fetchDeposits();
      }
    )
  }

  


}
