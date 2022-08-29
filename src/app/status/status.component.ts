import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StatusService } from '../status.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  
   statusDetails=null;
  constructor(private statusService: StatusService) {
    this.getStatusDetails();
   }
  register(registerForm:NgForm){
    this.statusService.registerStatus(registerForm.value).subscribe(
      (resp:any) => {
        console.group(resp)
        this.getStatusDetails();
      },
      (err:any) =>{
        console.log(err);
        
      }
  
    );

  }
     getStatusDetails(){
      this.statusService.getStatus().subscribe(

        (resp:any) => {
          console.group(resp)
          this.statusDetails=resp;
        },
        (err:any) =>{
          console.log(err);
          
        }
      );
      console.log(this.statusDetails);
      
     }
  ngOnInit(): void {
  }

}
