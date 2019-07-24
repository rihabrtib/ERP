import { Injectable } from '@angular/core';
import { HttpHeaders,HttpClient } from '@angular/common/http';


export class Conge{
  constructor(
     public id:number,
     public dateDepart:Date,
     public dateFin:Date,
   
    
  
 
  ) {}
}
@Injectable({
  providedIn: 'root'
})
export class CongeService {

  constructor(
    private http: HttpClient) {}
    Url='http://localhost:9008/conge/getAll';
    Url1='http://localhost:9008/conge/add';
    Url2='http://localhost:9008/conge/delOneById';
    getConge(){
      return this.http.get<Conge[]>(this.Url);
    }
    
    
    addConge(conge:Conge, idPersonnel:any){
      return this.http.post<Conge>(this.Url1+"/"+idPersonnel, conge);
    }
    // getFormationId(id:number){
    //  return this.http.get<Formation>(this.Url+"/"+id);
    // }
    //  updateFormation(user:Formation){
    //    return this.http.put<Formation>(this.Url+"/"+user.id,user);
    //  }
    deleteConge(conge:Conge){
      return this.http.delete<Conge>(this.Url2+"/"+conge.id);
    }
    }
    
