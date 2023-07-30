import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {

  authType: string = 'login';
  changeAuthType(type: string){
    this.authType = type;
  }


  username:string = '';
  email: string = '';
  password: string ='';
  usertype: string = '';
  homeBranch: string = '';
  details: {} = {};

  constructor(private http: HttpClient, private route: Router){ }

  ngOnInit(): void {
    
    const userid = localStorage.getItem('userid');
    const userType = localStorage.getItem('usertype');

    if(userid && userType === 'admin'){
      this.route.navigate(['/admin']);
    } else if(userid && userType === 'customer'){
      this.route.navigate(['/home']);
    }
  }

  register(){

    this.details = {username: this.username, email: this.email,
                       usertype: this.usertype, password: this.password, homeBranch: this.homeBranch};
    this.http.post('http://localhost:6001/register', this.details).subscribe(
        (response:any) =>{
          localStorage.setItem('userid', response._id);
          localStorage.setItem('username', response.username);
          localStorage.setItem('email', response.email);
          localStorage.setItem('usertype', response.usertype);
          localStorage.setItem('balance', response.balance);
          localStorage.setItem('IFSC', response.ifsc);
          localStorage.setItem('homeBranch', response.homeBranch);
          this.username = '';
          this.email = '';
          this.password='';
          this.usertype = '';
          this.homeBranch = '';

          if (response.usertype === 'customer'){

            this.route.navigate(['/home']);

          }else if(response.usertype === 'admin'){
            this.route.navigate(['/admin']);
          }
        },
        (error) => {
          console.error(error);
        }
    )
  }

  login(){
    
    this.details = {email: this.email, usertype: this.usertype, password: this.password};
    
    this.http.post('http://localhost:6001/login', this.details).subscribe(
        (response:any) =>{
          localStorage.setItem('userid', response._id);
          localStorage.setItem('username', response.username);
          localStorage.setItem('email', response.email);
          localStorage.setItem('usertype', response.usertype);
          localStorage.setItem('balance', response.balance);
          localStorage.setItem('IFSC', response.ifsc);
          localStorage.setItem('homeBranch', response.homeBranch);
          this.username = '';
          this.email = '';
          this.password='';
          this.usertype = '';
          this.homeBranch = '';

          if (response.usertype === 'customer'){

            this.route.navigate(['/home']);

          }else if(response.usertype === 'admin'){
            this.route.navigate(['/admin']);          
          }
        },
        (error) => {
          console.error(error);
        }
    )
  }


}
