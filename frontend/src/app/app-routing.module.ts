import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterCourseComponent } from './admin/register-course/register-course.component';
import { RegisterStudentComponent } from './admin/register-student/register-student.component';
import { RegisterSubjectComponent } from './admin/register-subject/register-subject.component';
import { RegisterTeacherComponent } from './admin/register-teacher/register-teacher.component';
import { LoginComponent } from './home/login/login.component';

const routes: Routes = [
  {
    path:'',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path:'registerCourse',
    component: RegisterCourseComponent,
  },
  {
    path:'registerStudent',
    component: RegisterStudentComponent,
  },
  {
    path:'registerSubject',
    component: RegisterSubjectComponent,
  },
  {
    path:'registerTeacher',
    component: RegisterTeacherComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
