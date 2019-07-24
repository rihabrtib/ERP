import { Injectable } from '@angular/core';
import { HttpHeaders,HttpClient } from '@angular/common/http';

const headers={
  headers:new HttpHeaders({
    'content-Type':'application/json'
  })
}
export class User{
  constructor(
     public id:number,
    public name:string,
    public apellidos:string,
  //  public email:string,
 //   public id:string, 
  //  public text:string,
  //  public user_id:string,
  ) {}
}

//var Url:string='http://localhost:8000/user/get';
//var Url2 :string='http://localhost:8008/user/add';
//var Url3 :string='http://localhost:8008/user/delete';
//var Urll :string='http://localhost:8008/user/update';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }
  Url='http://localhost:9000/personas';
  getuser(){
    return this.http.get<User[]>(this.Url);
  }
  adduser(user:User){
    return this.http.post<User>(this.Url,user);
    
  }
  getUserId(id:number){
    return this.http.get<User>(this.Url+"/"+id);
  }
  updateUser(user:User){
    return this.http.put<User>(this.Url+"/"+user.id,user);
  }
  deleteUser(user:User){
    return this.http.delete<User>(this.Url+"/"+user.id);
  }















 // getuser(){
 //   return this.http.get('http://localhost:8008/user/all')
 // }

 // adduser(user)
 // {
 //   return this.http.post(Url2,user)
 // }


 // deleteUser(user:User){
 //   return this.http.delete<User>(Url3+"/"+user.id);
 // }
 // updateUser(user:User){
 //   return this.http.post<User>(Urll+"/"+user.id,user);
 // }
 // getPersonaId(id:number){
 //   return this.http.get<User>(Url+"/"+id);
 // }
 // Login(user)
 // {
 //   return this.http.post(Url,user)
 // }
  
}
