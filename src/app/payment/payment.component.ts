import { Component, OnInit } from '@angular/core';
import { PaymentCardDetails } from 'src/models/payment.model';
import { PaymentService } from 'src/services/payment.service';
import {ToastrService } from 'ngx-toastr';
import { Router, RouterOutlet } from '@angular/router';
import { PreviewService } from 'src/services/preview.service';
import { Preview } from 'src/models/preview.model';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html', 
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  cardDetail:PaymentCardDetails
  result:string
  preview:Preview
  previewdetail:any
  constructor(private paymentService:PaymentService,private previewService:PreviewService,private toastr:ToastrService,public router: Router) {
    this.cardDetail=new PaymentCardDetails();
    this.previewService.getUserData().subscribe(res=>{
      this.previewdetail=res
      console.log(this.previewdetail)
    })
   }
   prepareRoute(outlet:RouterOutlet){
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
  
  SaveData()
  { 
    // console.log(this.cardDetail)
    // console.log(this.cardDetail.Cardholder)
    this.cardDetail.Paymenttype="Creditcard";
    this.paymentService.addPayment(this.cardDetail).subscribe((res:boolean)=>{
      //console.log(res);
      if(res==true) 
      {
   
          this.router.navigateByUrl("/success");
         this.toastr.success('Payment Successful','Success');
      }
      
      else{
        this.toastr.info('Please fill all fields','Failed');
      }
    })
  }

  ngOnInit() {
  }

}
