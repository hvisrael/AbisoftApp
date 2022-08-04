import { Injectable } from '@angular/core';
import { AbisoftPersona } from './abisoft-persona.model';
import { HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AbisoftPersonaService {

  constructor(private http:HttpClient) { }
  readonly baseUrl='http://localhost:5062/api/Persona'
  formData:AbisoftPersona = new AbisoftPersona();
  list:AbisoftPersona[];

  postPersona(){
   return this.http.post(this.baseUrl,this.formData);
  }
  
 
  putPersona(){
    return this.http.put(`${this.baseUrl}/${this.formData.id}`,this.formData);
   }

   deletePersona(id:number){
    return this.http.delete(`${this.baseUrl}/${id}`);

   }

   refreshList(){
    this.http.get(this.baseUrl)
    .toPromise()
    .then(res => this.list = res as AbisoftPersona[]);
  }


}
