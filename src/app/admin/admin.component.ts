import { Component, OnInit } from '@angular/core';
import { Admin } from 'src/models/admin.model';
import { AdminService } from 'src/services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  adm:Admin;
  result:string;
  choice:any;
  // myform:FormGroup;
  // minDate=new Date(2019,11,1);
  // maxDate=new Date(2019,11,31);

  

  constructor( private adminservice:AdminService) {
     this.adm=new Admin();
    
    // this.myform = new FormGroup(
    //   {
    //     UserName:new FormGroup(null,Validators.required)
    //   })
   }
  //  public get UserName()
  //  {
  //    return this.myform.get("UserName");
  //  }


  onSubmit(){
    // this.registerservice.addUser(this.register);
    // this.result="added";
    //this.choice=(this.adminservice.addDetails(this.adm));
         this.adminservice.addDetails(this.adm).subscribe((res:any)=>{
         // console.log(res);
          if(res==true)
          this.result="added";
          else
          this.result="fail";
      })
     
         
        // if(this.myform.valid)
        // {
        //   debugger;
        //   this.result = "success";
        //   console.log(this.result);
        // }
        // else{
        //   this.result="fail";
        //   console.log(this.result);

        // }
      
    

  }

  ngOnInit() {
  }

}
