import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first-page-of-admin',
  templateUrl: './first-page-of-admin.component.html',
  styleUrls: ['./first-page-of-admin.component.css']
})
export class FirstPageOfAdminComponent implements OnInit {

  constructor(private router:Router) {
    
  }

 goToInsertion(){
   //console.log('clicked');
   this.router.navigateByUrl('/admin');
 }

 goToUpdate(){
   this.router.navigateByUrl('/get-details'); 
 }

 goToDelete(){
   this.router.navigateByUrl('/delete');
 }
 goToLogin(){
  this.router.navigateByUrl('/User');
}
 

  ngOnInit() {
  }

}
