import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  constructor(private http:HttpClient) { }
  API ='http://localhost:8098';

  public registerStatus(statusData:any){
    return this.http.post(this.API + '/registerStatus',statusData);
  }
  public getStatus(){
    return this.http.get(this.API +'/getStatus');
  }
}
