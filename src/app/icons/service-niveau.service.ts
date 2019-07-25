import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

export class Niveau {
  constructor(
    public id: number,
    public name: string,
    public NumNiveau: number,
    public description: string,

  ) { }
}
@Injectable({
  providedIn: 'root'
})
export class ServiceNiveauService {

  constructor(private http: HttpClient) { }
  Url = 'http://localhost:9008/niveau/getAll';
  Url1 = 'http://localhost:9008/niveau/add';
  Url2 = 'http://localhost:9008/niveau/delOneById';
  Url4 = 'http://localhost:9008/niveau/getId';
  Url5 = 'http://localhost:9008/niveau';
  getNiveau() {
    return this.http.get<Niveau[]>(this.Url);
  }
  addNiveau(niveau: Niveau, idFormation: any) {
    return this.http.post<Niveau>(this.Url1 + "/" + idFormation, niveau);
  }
  getNiveauId(id: number) {
    return this.http.get<Niveau>(this.Url4 + "/" + id);
  }

  //updateNiveau(niveau:Niveau){

  // return this.http.put<Niveau>(this.Url5,niveau);
  //}
  updateNiveau(id, niveau: Niveau) {

    return this.http.put<Niveau>(this.Url5 + "/" + id, niveau);
  }
  deleteNiveau(niveau: Niveau) {
    return this.http.delete<Niveau>(this.Url2 + "/" + niveau.id);
  }
}
