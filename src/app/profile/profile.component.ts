import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  StudentDetails=null;
  studentToUpdate={
    StudentId:"",
    name:"",
    email:"",
    phoneNumber:""
  };
  constructor( private studentService: StudentService){
    this.getStudentsDetails();
  }
  

  
  getStudentsDetails(){
    this.studentService.getStudents().subscribe(
      (resp:any)=>{
        console.log(resp);
        this.StudentDetails=resp;
      },
    (err:any)=>{
      console.log(err);
    }
    );
    console.log(this.StudentDetails);
  }

  updateProfile(student:any){
    this.studentToUpdate = student;
    console.log(this.studentToUpdate.email);
  }
  updateStudent(){
    this.studentService.updateStudent(this.studentToUpdate).subscribe(
      (resp:any)=>{
        console.log(resp,"This is update Student");
      },
      (err:any) => {
        console.log(err);
      }
    )
  }

  ngOnInit(): void {
  
      
  }
 

   

}

function getStudentsDetails() {
  throw new Error('Function not implemented.');
}
