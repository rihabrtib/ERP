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
var Url3 :string='http://localhost:8008/user/delete';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }
  getuser(){
    return this.http.get('http://localhost:8008/user/all')
  }

  adduser(user)
  {
    return this.http.post(Url2,user)
  }


  deleteUser(user:User){
    return this.http.delete<User>(Url3+"/"+user.id);
  }


  Login(user)
  {
    return this.http.post(Url,user)
  }
  
}
