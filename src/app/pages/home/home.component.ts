import { Component, inject, OnInit } from '@angular/core';
import { UserInterface } from '../../intefaces/user-interface';
import { UserService } from '../../service/user.service';
import { ListComponent } from "../../task/list/list.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  
}
