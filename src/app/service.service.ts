import { Injectable } from '@angular/core';
import { HttpHeaders,HttpClient } from '@angular/common/http';

const headers={
  headers:new HttpHeaders({
    'content-Type':'application/json'
  })
}
export class User{
  constructor(

    public username:string,
    public pass:string,
    public email:string,
 //   public id:string, 
  //  public text:string,
  //  public user_id:string,
  ) {}
}

var Url:string='http://localhost:8000/user/get';
var Url2 :string='http://localhost:8008/user/add';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }
  getuser(user){
    return this.http.get('http://localhost:8008/user/all',user)
  }

  adduser(user)
  {
    return this.http.post(Url2,user)
  }

  Login(user)
  {
    return this.http.post(Url,user)
  }
  
}
