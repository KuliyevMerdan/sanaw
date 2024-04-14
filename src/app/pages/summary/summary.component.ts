import { Component , OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';
import { FieldsetModule } from 'primeng/fieldset';
import { RouterLink } from '@angular/router';
import { TableModule } from 'primeng/table';
import { UsersService } from '../../users.service';
import { Router } from '@angular/router';
import { DialogModule } from 'primeng/dialog';
import { HttpClientModule } from '@angular/common/http';
import * as XLSX from 'xlsx'
  
@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [ButtonModule, CheckboxModule, CardModule, ImageModule, FieldsetModule, RouterLink, TableModule, DialogModule, HttpClientModule],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.css',
  providers: [UsersService]
})
export class SummaryComponent implements OnInit {
  users: any[]=[];
  today: number = Date.now();
  visible: boolean = false;

  constructor(private usersService: UsersService, private router: Router
  ) { }
  ngOnInit(): void {
    this.getUsers();
    //console.log(this.users)
    if(localStorage.getItem('currentUser') === 'true'){
      //console.log("Successfully logged in!")
    } else {
      this.router.navigate(['/login']);
    }
  }

  dataExport(): void {
    const ws = XLSX.utils.json_to_sheet(this.users);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'pylany');

    XLSX.writeFile(wb, 'Merdan.xlsx')
    this.visible = true
  }

  loginReset():void {
    localStorage.setItem('currentUser', 'false')
  }

  getUsers(): void{
    this.usersService.getUsers().subscribe((users: any) => {
      console.log(users)
      this.users = users;
    })
}
}
