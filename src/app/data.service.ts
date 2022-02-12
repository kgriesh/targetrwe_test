import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  constructor(private httpClient: HttpClient) { }

  private REST_API_SERVER = "http://localhost:8080/products";

  get_headers = {
    headers: new HttpHeaders({'Content-Type': 'text/plain'})
  }

  public sendGetRequest(){
    return this.httpClient.get<Product[]>(this.REST_API_SERVER, this.get_headers);
  }
    
  headers = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  public sendPostRequest(p: Product){
    return this.httpClient.post(this.REST_API_SERVER,  p, this.headers).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )
  }
}
