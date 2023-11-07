import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BreweryData, login, signup } from 'data-type';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseurl:string="https://localhost:7047/api/Auth/";
  private searchByNameUrl = "https://api.openbrewerydb.org/v1/breweries/search?query=";
  private searchBycity = "https://api.openbrewerydb.org/v1/breweries?by_city=";
  private searchBytypeUrl = "https://api.openbrewerydb.org/v1/breweries?by_type=";
  constructor(private http:HttpClient) { }

  userLogin(data:login): Observable<boolean> {
    return this.http.post<boolean>(`${this.baseurl}Login`,data);
  }

  usersignUp(data:signup): Observable<boolean>{
    return this.http.post<boolean>(`${this.baseurl}Register`,data);
    
   }

   searchByName(query:string): Observable<BreweryData[]>{
    return this.http.get<BreweryData[]>(`${this.searchByNameUrl}`+query);
   }

   searchByCity(query:string): Observable<BreweryData[]>{
    return this.http.get<BreweryData[]>(`${this.searchBycity}`+query);
   }

   searchBytype(query:string): Observable<BreweryData[]>{
    return this.http.get<BreweryData[]>(`${this.searchBytypeUrl}`+query);
   } 
}
