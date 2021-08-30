import { Component, OnInit } from '@angular/core';
import { TeacherService } from "../../services/teacher.service";
import { Router } from "@angular/router";
import { MatSnackBar, MatSnackBarHorizontalPosition,MatSnackBarVerticalPosition, } from "@angular/material/snack-bar";

@Component({
  selector: 'app-register-teacher',
  templateUrl: './register-teacher.component.html',
  styleUrls: ['./register-teacher.component.css']
})
export class RegisterTeacherComponent implements OnInit {
  registerData:any;
  message: string;
  horizontalPosition:MatSnackBarHorizontalPosition ='end';
  verticalPosition:MatSnackBarVerticalPosition = 'top';
  durationInSeconds:number=2;
  constructor(private _teacherService: TeacherService, private _router: Router,private _snackBar:MatSnackBar) {
    this.message='';
    this.registerData={};
   }

  ngOnInit(): void {
  }
  registerTeacher(){
    if (!this.registerData.name ||
      !this.registerData.lastName ||
      !this.registerData.specialty ||
      !this.registerData.dni ||
      !this.registerData.address ||
      !this.registerData.telephone ||
      !this.registerData.email ||
      !this.registerData.password
      ) {
      console.log('Failed process: Incomplete data');
      this.message = 'Failed process: Incomplete data';
      this.openSnackBarError();
      this.registerData = {};
      
    } else {
      this._teacherService.registerTeacher(this.registerData).subscribe(
        (res) => {
          console.log(res);
          //localStorage.setItem('token', res.jwtToken);
          //this._router.navigate(['/listCourse']);
          this.message = 'Succesfull Course registration';
          this.openSnackBarSuccesfull();
          this.registerData = {};
        },
        (err) => {
          console.log(err);
          this.message = err.error;
          this.openSnackBarError();
        }
      );
    }
  }

  openSnackBarError(){
    this._snackBar.open(this.message, 'X', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.durationInSeconds * 1000,
      panelClass: ['style-snackBarFalse'],
    });
  }
  openSnackBarSuccesfull(){
      this._snackBar.open(this.message, 'X', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.durationInSeconds * 1000,
      panelClass: ['style-snackBarTrue'],
    });
  }


}
