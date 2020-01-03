import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LoginService } from 'src/services/login.service';

@Component({
  selector: 'app-cancel-ticket',
  templateUrl: './cancel-ticket.component.html',
  styleUrls: ['./cancel-ticket.component.css']
})
export class CancelTicketComponent implements OnInit {

  username:string
  cancelticket:any
  token:string

  constructor(private myHttp:HttpClient,private router:Router,private loginservice:LoginService) { 
    this.username=localStorage.getItem("useremail")
    this.myHttp.get("https://localhost:44381/api/CancelTicket?Username="+this.username)
        .subscribe(res=>{
            console.log(res);
            this.cancelticket=res;
        })
  }
getbookid(Bookid){

  console.log(Bookid);
  this.router.navigate(['cancellation',Bookid],{skipLocationChange:true});

}
goToLogin() {
  // localStorage.removeItem('userToken');
  // localStorage.removeItem('value');
  
  this.router.navigateByUrl("/User");
}
logOut() {
  localStorage.removeItem('userToken');
  localStorage.removeItem('value');
  this.router.navigateByUrl("/Home");
  window.location.reload();
}
userName() {
  this.token = localStorage.getItem('userToken');
  console.log(this.token)
  if (this.token != null) {
    this.loginservice.getUserClaims().subscribe((data: any) => {
      // console.log(data.Username);
      console.log(data);
      this.username = data.Firstname;
      //console.log(data.Firstname);
    })
  }

}

  ngOnInit() {
    this.userName();
    console.log(localStorage.getItem('userToken'))
  }

}
