import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScholarService {

  constructor(private http:HttpClient) { }

     API = "http://localhost:8089";
    public registerScholar(scholarData:any){
      return this.http.post(this.API + '/registerScholar',scholarData)
      
    }
    public getscholar(){
      return this.http.get(this.API + '/getScholar');
    }
    public updateScholar(scholar:any){
      return this.http.put(this.API +'/updateScholar',scholar);
      
     }
  
}
