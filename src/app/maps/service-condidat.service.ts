import { Injectable } from '@angular/core';
import { HttpHeaders,HttpClient } from '@angular/common/http';

export class Condidat{
  constructor(
     public id:number,
    public firstName:string,
    public lastName:string,
    public email:string,
    public payer:boolean,
    public adresse:string,
    public cv:string,
    public numTel:string,
    
   
 
  ) {}
}
@Injectable({
  providedIn: 'root'
})
export class ServiceCondidatService {

  constructor(private http: HttpClient) { }
  Url='http://localhost:9008/condidats/getAll';
  Url1='http://localhost:9008/condidats/add';
  Url2='http://localhost:9008/condidats/delOneById';
  getCondidat(){
    return this.http.get<Condidat[]>(this.Url);
  }
  
 // addCondidat(id,condidat:Condidat){
    
 //   return this.http.post<Condidat>(this.Url1+"/"+id,condidat);
 // }



  addCondidat(condidat:Condidat, idFormation:any){
    return this.http.post<Condidat>(this.Url1+"/"+idFormation, condidat);
  }
  // getFormationId(id:number){
  //  return this.http.get<Formation>(this.Url+"/"+id);
  // }
  //  updateFormation(user:Formation){
  //    return this.http.put<Formation>(this.Url+"/"+user.id,user);
  //  }
  deleteCondidat(condidat:Condidat){
    return this.http.delete<Condidat>(this.Url2+"/"+condidat.id);
  }
  }
  