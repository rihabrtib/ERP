import { Injectable } from '@angular/core';
import { HttpHeaders,HttpClient } from '@angular/common/http';

export class Personnel{
  constructor(
     public id:number,
    public firstName:string,
    public lastName:string,
    public role:string,
    public email:string,
    public numTel:string,
    public dateRec:String,
    public salaire:string,
    public adresse:string,
    public photo:any,
    
  
 
  ) {}
}
@Injectable({
  providedIn: 'root'
})
export class ServicePersonnelsService {

  constructor(private http: HttpClient) { }
  Url='http://localhost:9008/employe/getAll';
  Url1='http://localhost:9008/employe/add';
  Url2='http://localhost:9008/employe/delOneById';
  Url3='http://localhost:9008/employe/file';
  Url4='http://localhost:9008/employe';
  getPersonnel(){
    return this.http.get<Personnel[]>(this.Url);
  }
  
  
  addPersonnel(data:any ,personnel:Personnel){
    return this.http.put<Personnel>(this.Url1+"/"+data,personnel);
  }
  addPhoto(file){
    return this.http.post<Personnel>(this.Url3,file);
  }

  
  getPersonnelId(id:number){
    return this.http.get<Personnel>(this.Url4+"/"+id);
  }
  updatePersonnel(id,formation:Personnel){
    
   return this.http.put<Personnel>(this.Url4+"/"+id,formation);
 }
  deletePersonnel(personnel:Personnel){
    return this.http.delete<Personnel>(this.Url2+"/"+personnel.id);
  }
  }
  