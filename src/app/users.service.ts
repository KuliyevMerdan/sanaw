import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  getUsers(){
    const users = [
      { 
        "id": "0",
        "filename": "oglan.jpg",
        "name": "Myrat Meredow",
        "role": "Orunbasar",
        "main_id": "608",
        "time": ""
    },
    {
      "id": "1",
        "filename": "oglan2.jpg",
        "name": "Nazar Halymow",
        "role": "Isci",
        "main_id": "18",
        "time": ""
    },
    {
      "id": "2",
        "filename": "oglan3.jpg",
        "name": "Mergen Saryýew",
        "role": "Işçi",
        "main_id": "11",
        "time": ""
    }, {
      "id": "3",
        "filename": "./gyz3.jpg",
        "name": "Selbi Tuwakgylyjowa",
        "role": "Buhgalter",
        "main_id": "20",
        "time": ""
    },
    {
      "id": "4",
        "filename": "gyz2.jpg",
        "name": "Mahri Rahymowa",
        "role": "Reseption",
        "main_id": "10",
        "time": ""
    },
    {
      "id": "5",
        "filename": "gyz.jpg",
        "name": "Jahan Merdanowa",
        "role": "Müdir",
        "main_id": "100",
        "time": ""
    }
  ];
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With'
      })
    };

    //return this.http.get('http://192.168.77.179:3000/users', httpOptions);
    return users;
  }
  constructor(private http: HttpClient) { }
}
