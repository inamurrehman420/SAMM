import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddAppointmentComponent } from '../../appointments/add-appointment/add-appointment.component';

interface Report {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']

})
export class DashboardComponent {

  selectedValue: string;
  dataFromDialog: any;
  
  allReports: Report[] = [
    {value: '1', viewValue: 'Client report'},
    {value: '2', viewValue: 'Appointment reports'},
    {value: '3', viewValue: 'Operational report'},
  ];

  constructor(private dialog: MatDialog, private dialogRef: MatDialog,){}
    ngOnInit() {
    }

    onAddAppointment(){
      const dialogRef = this.dialog.open(AddAppointmentComponent, {
        width: '70%',
        height: 'auto',
      });
  
      dialogRef.afterClosed().subscribe((data) => {
        this.dataFromDialog = data.form;
        if (data.clicked === 'submit') {
          console.log('Sumbit button clicked');
        }
      });
    }

}
