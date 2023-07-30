import { HttpClient } from '@angular/common/http';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnChanges {
  username: string | null = localStorage.getItem('username');
  userid: string | null = localStorage.getItem('userid');
  IFSC: string | null = localStorage.getItem('IFSC');
  homeBranch: string | null = localStorage.getItem('homeBranch');
  accountBalance: number = 0;
  sendingAmount: number = 0;
  sendingAcId: string = '';
  sendingIFSC: string = '';
  sendingMethod: string = '';
  sendingRemarks: string = '';
  sendTransactionData = {};
  transactions:any[] = [];

  constructor(private http: HttpClient, private route: Router) {
    this.username = localStorage.getItem('username');
    this.userid = localStorage.getItem('userid');
  }

  ngOnInit(): void {
    
    this.userid = localStorage.getItem('userid');
    this.sendHttpRequest();
    if(!this.userid){
      this.route.navigate(['']);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['userid']) {
      this.sendHttpRequest();
    }
  }

  private sendHttpRequest(): void {
    if (this.userid) {
      this.http.get(`http://localhost:6001/user-details/${this.userid}`).subscribe(
        (response: any) => {
          console.log(response);
          this.accountBalance = response.balance;
        },
        (error: any) => {
          console.error(error);
        }
      );

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


  sendMoney(){
    this.sendTransactionData = {senderId: this.userid, senderName: this.username,
                                   receiverId: this.sendingAcId, receiverIFSC: this.sendingIFSC, amount: this.sendingAmount, paymentMethod: this.sendingMethod, remarks: this.sendingRemarks,  time: new Date()};

    console.log(this.sendTransactionData);
    if (this.sendingAmount <= this.accountBalance){

      this.http.post('http://localhost:6001/send-money', this.sendTransactionData).subscribe(
        (response: any) =>{
          alert("transaction successful");
          this.sendingAcId = '';
          this.sendingAmount = 0;
          this.sendingIFSC = '';
          this.sendingMethod = '';
          this.sendingRemarks = '';
          this.sendHttpRequest();
        }
      )

    }else{
      alert("No suffecient balance");
    }
  }


}