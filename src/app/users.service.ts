import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  getUsers(){
    return this.http.get('http://localhost:3000/users');
  }
  check(id: any, time: any){
      const url = `http://localhost:3000/update`;
      let body = {
        main_id: id,
        time: time
      }
      return this.http.put(url, body);
  }

  constructor(private http: HttpClient) { }
}
