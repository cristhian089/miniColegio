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
  constructor(private _teacherService: TeacherService, private _router: Router,private _snackBar:MatSnackBar) {
    this.message='';
    this.registerData={};
   }

  ngOnInit(): void {
  }
  registerTeacher(){}

}
