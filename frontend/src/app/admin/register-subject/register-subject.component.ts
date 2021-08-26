import { Component, OnInit } from '@angular/core';
import { SubjectService } from "../../services/subject.service";
import { Router } from "@angular/router";
import { MatSnackBar, MatSnackBarHorizontalPosition,MatSnackBarVerticalPosition, } from "@angular/material/snack-bar";

@Component({
  selector: 'app-register-subject',
  templateUrl: './register-subject.component.html',
  styleUrls: ['./register-subject.component.css']
})
export class RegisterSubjectComponent implements OnInit {
  registerData:any;
  message: string;
  horizontalPosition:MatSnackBarHorizontalPosition ='end';
  verticalPosition:MatSnackBarVerticalPosition = 'top';
  constructor(private _subjectService: SubjectService, private _router: Router,private _snackBar:MatSnackBar) {
    this.message='';
    this.registerData={};
   }

  ngOnInit(): void {
  }

  registerSubject(){}

}
