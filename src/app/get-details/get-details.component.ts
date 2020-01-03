import { Component, OnInit, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Flightex } from 'src/models/flightex.model';
import { RegistrationService } from 'src/services/registration.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-get-details',
  templateUrl: './get-details.component.html',
  styleUrls: ['./get-details.component.css']
})
export class GetDetailsComponent implements OnInit {

  @Output() getdetails: Flightex;
  message: string;
  value: string;
  myForm: FormGroup;
  flight: Flightex;
  constructor(private formbuilder: FormBuilder,
      private router: Router,
      private regservice: RegistrationService,
      private toastr: ToastrService) 
  {
    this.myForm = new FormGroup({
      fid: new FormControl(null, [Validators.required])
    });
  }

  public get fid() {
    return this.myForm.get("fid");
  }




  Send() {

    if (this.myForm.valid) {

      console.log(this.fid.value);
      localStorage.setItem("val", this.fid.value);
      this.regservice.update(this.fid.value).subscribe
        ((res: any) => {
          console.log(res)
          if (res == null) {
            this.value = "No data found";
            this.toastr.info('No data found', 'Failed');

          }
          else {
            this.flight = res;
            console.log(this.flight)
            this.router.navigate(['/update-details', { data: JSON.stringify(this.flight) }], { skipLocationChange: true });

          }

          //console.log(this.flight);

        }, (err: HttpErrorResponse) => {
          this.value = "Invalid id";
          this.toastr.info('Invalid id', 'Failed');
          console.log(this.value)
        });

    }

  }

  ngOnInit() {
  }

}
