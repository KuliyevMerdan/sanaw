import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ButtonModule } from 'primeng/button'
import { CheckboxModule } from 'primeng/checkbox'
import { CardModule } from 'primeng/card'
import { ImageModule } from 'primeng/image'
import { FieldsetModule } from 'primeng/fieldset'
import { RouterLink } from '@angular/router';
import { DialogModule } from 'primeng/dialog';
import { DatePipe } from '@angular/common';
import { UsersService } from '../../users.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ButtonModule, CheckboxModule, CardModule, ImageModule, FieldsetModule, RouterLink, DialogModule, HttpClientModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
  providers: [DatePipe, UsersService]
})
export class MainComponent implements OnInit {
  @ViewChild('ID') IDel: ElementRef;
  @ViewChild('username') usernameEl: ElementRef;
  @ViewChild('role') roleEl: ElementRef;
  @ViewChild('time') timeEl: ElementRef;

  visible: boolean = false;

  notification: any;
  ID: any;
  photo: string = './assets/place.jpg'
  username: any;
  role: any;
  time: any;
  users: any[] = [];

  constructor(private datePipe: DatePipe, private usersService: UsersService){
    this.IDel = this.ID;
    this.usernameEl = this.username;
    this.roleEl = this.role;
    this.timeEl = this.time;
  }

  ngOnInit(): void {
    this.getUsers()
  }
  loginReset():void {
    localStorage.setItem('currentUser', 'false')
  }

  check():void {
    this.time = this.datePipe.transform(new Date(), 'h:mm d/M/yyyy')
    this.users.forEach((item) => {
      if(item.main_id === this.IDel.nativeElement.value){
        this.notification = 'Gelen wagtyňyz bellendi!'
        this.photo = `http://localhost:3000/${item.filename}`
        this.usernameEl.nativeElement.value = item.name;
        this.roleEl.nativeElement.value = item.role;
        this.timeEl.nativeElement.value = this.time;
        this.update(item.main_id, this.time)
        this.visible = true;
        setTimeout(() => {
          this.visible = false
        } , 3000)
        setTimeout(() => {
          this.photo = './assets/place.jpg';
          this.usernameEl.nativeElement.value = '';
          this.roleEl.nativeElement.value = '';
          this.timeEl.nativeElement.value = '';
          this.IDel.nativeElement.value = '';
        } , 6000)
      } else if(this.IDel.nativeElement.value === ''){
        this.notification = 'ID belgiňizi giriziň!'
        this.visible = true;
        setTimeout(() => {this.visible = false} , 2000)
      }
    })
  }
  getUsers(): void{
    this.usersService.getUsers().subscribe((data: any) => {
      this.users = data;
      console.log(this.users)
    })
  }
  update(id:any, time: any){
    this.usersService.check(id, time).subscribe(res => console.log(res))
  }
}

