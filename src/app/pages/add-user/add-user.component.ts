import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { FieldsetModule } from 'primeng/fieldset';
import { ImageModule } from 'primeng/image';
import { DialogModule } from 'primeng/dialog';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [ButtonModule, CheckboxModule, CardModule, ImageModule, FieldsetModule, RouterLink, DialogModule, HttpClientModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css',
  providers: [HttpClient]
})
export class AddUserComponent {
  file: any;
  username: any;
  role: any;
  visible: boolean = false;
  constructor(private http: HttpClient){}
  loginReset():void {
    localStorage.setItem('currentUser', 'false')
  }

  handleChange(event: any):void {
    this.file = event.target.files[0];
    var formData = new FormData();
    formData.append('file', this.file);
    this.file = formData
    // console.log(this.file)
    // this.addUser(this.file)
  }

  handleName(event: any):void { 
    this.username = event.target.value;
  }
  handleRole(event: any):void {
    this.role = event.target.value;
   }
  addUser(): void {
    this.file.append('name', this.username);
    this.file.append('role', this.role);
    
    this.http.post('http://localhost:3000/upload', this.file).subscribe(res => {
      console.log(res);
      this.visible = true;
    })
    // this.http.post('http://192.168.77.179:3000/upload', this.file).subscribe(res => {
    //      console.log(res);
    //    })
    //
  }
}
