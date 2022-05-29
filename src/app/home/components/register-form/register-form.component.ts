import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  constructor( 
    private EventService:EventsService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<RegisterFormComponent>,
    public auth: AuthService,
    ) { }

  ngOnInit(): void {
    console.log(this.data.dataKey);
  }
  email = new FormControl('', [Validators.required, Validators.email]);
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  fullname:string | undefined;
  register(){
    this.EventService.regiter_to_event({
      fullname :this.fullname,
      email :this.email.value,
      user_id:this.auth.getUser_id()
    },this.data.dataKey).subscribe(() => {
      this.dialogRef.close({ data: true });
    })  
  }

  close(){
    this.dialogRef.close({ data: false });
  }

}
