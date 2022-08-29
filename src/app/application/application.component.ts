import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ScholarService } from '../scholar.service';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {
  scholarDetails= null;
  scholarToUpdate={
    applycationId:"",
    firstname:"",
    lastname:"",
    email:"",
    phonenumber:"",
    collegename:"",
    classname:"",
    rollnumber:"",
    address:"",
    state:""
  };
  constructor(private scholarService: ScholarService) {
    this.getScholarDetails();
   }
  
  getScholarDetails(){
    this.scholarService.getscholar().subscribe(
      (resp:any)=>{
      console.log(resp);
      this.scholarDetails=resp; 
      },
      (err:any)=>{
        console.log(err);
      }
    )
  }
  edit(scholar:any){
    console.log(scholar)
    this.scholarToUpdate = scholar;

  }
  updateScholar(){
    console.log(this.scholarToUpdate);
    
    this.scholarService.updateScholar(this.scholarToUpdate).subscribe(
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
