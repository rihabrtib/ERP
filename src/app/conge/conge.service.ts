import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';


export class Conge {
  constructor(
    public id: number,
    public dateDepart: Date,
    public dateFin: Date,




  ) { }
}
@Injectable({
  providedIn: 'root'
})
export class CongeService {

  constructor(
    private http: HttpClient) { }
  Url = 'http://localhost:9008/conge/getAll';
  Url1 = 'http://localhost:9008/conge/add';
  Url2 = 'http://localhost:9008/conge/delOneById';
  Url3 = 'http://localhost:9008/conge/getId';
  Url4 = 'http://localhost:9008/conge';
  getConge() {
    return this.http.get<Conge[]>(this.Url);
  }

  addConge(conge: Conge, idPersonnel: any) {
    return this.http.post<Conge>(this.Url1 + "/" + idPersonnel, conge);
  }
  getCongeId(id: number) {
    return this.http.get<Conge>(this.Url3 + "/" + id);
  }
  updateConge(id, conge: Conge) {

    return this.http.put<Conge>(this.Url4 + "/" + id, conge);
  }

  deleteConge(conge: Conge) {
    return this.http.delete<Conge>(this.Url2 + "/" + conge.id);
  }
}

