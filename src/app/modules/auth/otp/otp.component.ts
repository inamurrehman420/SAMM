import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss']
})
export class OtpComponent {

  otpValue: string = ''; 
  display: any;
constructor(private router: Router,
  private dialog: MatDialog,
   private dialogRef: MatDialogRef<OtpComponent>,
   private toastr: ToastrService){
    this.timer(1);
}

  otpConfig = {
    otpLength: 6, 
    allowNumbersOnly: true,
  };

  onSubmit(){
    this.router.navigateByUrl('/dashboard');
    this.toastr.success('Login Successfully','Success');
    this.dialogRef.close(true);
  }

  onClose(){
   this.dialogRef.close(true)
  }

  timer(minute) {
    let seconds: number = minute * 60;
    let textSec: any = "0";
    let statSec: number = 60;

    const prefix = minute < 10 ? "0" : "";

    const timer = setInterval(() => {
      seconds--;
      if (statSec != 0) statSec--;
      else statSec = 59;

      if (statSec < 10) {
        textSec = "0" + statSec;
      } else textSec = statSec;

      this.display = `${prefix}${Math.floor(seconds / 60)}:${textSec}`;

      if (seconds == 0) {
        console.log("finished");
        clearInterval(timer);
      }
    }, 1000);
  }

}
