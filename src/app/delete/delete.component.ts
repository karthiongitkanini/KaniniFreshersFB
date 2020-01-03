import { Component, OnInit } from '@angular/core';
import { Delete } from 'src/models/delete.model';
import { DeleteService } from 'src/services/delete.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  del:Delete;
  result:string;

  constructor( private deleteservice:DeleteService,private myHttp:HttpClient) { 
    this.del=new Delete();
  }

  deleteFlightDetails(){
    // console.log(this.del);
    this.deleteservice.deleteDetails(this.del).subscribe((res:any)=>{
      if(res==true)
      {
        this.result="successfully deleted";
      }
      else{
        this.result="Please enter a valid flight id"
      }
    })
  }



  ngOnInit() {
  }

}
