import { Component, NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button'
import { CheckboxModule } from 'primeng/checkbox'
import { CardModule } from 'primeng/card'
import { ImageModule } from 'primeng/image'

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ButtonModule, CheckboxModule, CardModule, ImageModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {}

