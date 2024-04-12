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
  //photo: string = '../../../assets/place.jpg';
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
    this.users = this.usersService.getUsers()
    console.log(this.users)
  }
  loginReset():void {
    localStorage.setItem('currentUser', 'false')
  }

  check():void {
    this.time = this.datePipe.transform(new Date(), 'h:mm')
    if(this.IDel.nativeElement.value === '12') {
      this.notification = 'Gelen wagtyňyz bellendi!'
      this.photo = './assets/gyz.jpg'
      //this.photo = 'http://localhost:4200/assets/gyz.jpg';
      this.usernameEl.nativeElement.value = 'Selbi Tuwakgylyjowa';
      this.roleEl.nativeElement.value = 'Işçi';
      this.timeEl.nativeElement.value = this.time;
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
    } else {
      this.notification = 'Bular ýaly ID belgisi bazada ýok!'
      this.visible = true;
      setTimeout(() => {this.visible = false} , 2000)
    }
    //console.log(this.IDel.nativeElement.value)
  }
}

