

import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Delete } from 'src/models/delete.model';

@Injectable()

export class DeleteService{
    del:any;

    constructor(private myHttp:HttpClient){
                    this.del=[];
    }
    deleteDetails(del:Delete){
        var reqHeader=new HttpHeaders({'No-Auth':'True'});
        return this.myHttp.delete(" https://localhost:44381/api/admin/deletedetails?flightid="+del.Fd_Id,{headers:reqHeader});
      
    }

} 