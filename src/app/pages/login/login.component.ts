import { Component, OnInit} from '@angular/core';
import { ButtonModule } from 'primeng/button'
import { CheckboxModule } from 'primeng/checkbox'
import { CardModule } from 'primeng/card'
import { ImageModule } from 'primeng/image'
import { FieldsetModule } from 'primeng/fieldset'
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ButtonModule, CheckboxModule, CardModule, ImageModule, FieldsetModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  constructor(private router: Router){}
  ngOnInit(): void {
    
  }
  login(){
    if(localStorage.getItem('currentUser') === 'false'){
      console.log("Successfully logged in!")
      localStorage.setItem('currentUser', 'true')
      this.router.navigate(['/summary'])
    } else {
      this.router.navigate(['/login']);
    }
  }
  loginReset():void {
    localStorage.setItem('currentUser', 'false')
  }
}
