import { Injectable } from '@angular/core';
import { HttpHeaders,HttpClient } from '@angular/common/http';

export class Achat{
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
    public photo:string,
    
  
 
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class FinanceService {

  constructor(private http: HttpClient) { }
  Url='http://localhost:9008/achat/getAll';
  Url1='http://localhost:9008/achat/add';
  Url2='http://localhost:9008/achat/delOneById';
  getAchat(){
    return this.http.get<Achat[]>(this.Url);
  }
  
  
  addAchat(achat:Achat){
    return this.http.post<Achat>(this.Url1,achat);
  }
  // getFormationId(id:number){
  //  return this.http.get<Formation>(this.Url+"/"+id);
  // }
  //  updateFormation(user:Formation){
  //    return this.http.put<Formation>(this.Url+"/"+user.id,user);
  //  }
  deleteAchat(achat:Achat){
    return this.http.delete<Achat>(this.Url2+"/"+achat.id);
  }
  }
  