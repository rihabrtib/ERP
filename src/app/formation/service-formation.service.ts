import { Injectable } from '@angular/core';
import { HttpHeaders,HttpClient } from '@angular/common/http';

const headers={
  headers:new HttpHeaders({
    'content-Type':'application/json'
  })
}

export class Formation{
  constructor(
     public id:number,
    public name:string,
    public type:string,
    public fileFormation:string,
 
  ) {}
}
@Injectable({
  providedIn: 'root'
})
export class ServiceFormationService {

  constructor(private http: HttpClient) { }



  Url='http://localhost:9008/formation';
  Url3='http://localhost:9008/formation/delOneById';
  Url1='http://localhost:9008/formation/add';
  Url2='http://localhost:9008/formation'
  getFormation(){
    return this.http.get<Formation[]>('http://localhost:9008/formation/getAll');
  }

 
  addFormation(formation:Formation){
    return this.http.post<Formation>(this.Url1,formation);
  }
  getFormationId(id:number){
    return this.http.get<Formation>(this.Url2+"/"+id);
  }
  updateFormation(id,formation:Formation){
    
   return this.http.put<Formation>(this.Url2+"/"+id,formation);
 }
  deleteFormation(formation:Formation){
    return this.http.delete<Formation>(this.Url3+"/"+formation.id);
  }
  deleteFormationn(formation){
    return this.http.delete<Formation>(this.Url3,formation);
  }
}
