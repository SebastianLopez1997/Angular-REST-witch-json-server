import { Component, inject, OnInit } from '@angular/core';
import { UserInterface } from '../../intefaces/user-interface';
import { UserService } from '../../service/user.service';
import { CompilerConfig } from '@angular/compiler';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [RouterModule,RouterLink],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent implements OnInit {
  ngOnInit(): void {
    this.userService.getUsers().subscribe({
      next: (user: UserInterface[]) => {
        this.listUser = user;
      },
      error: (e: Error) => {
        console.log(e.message);
      },
    });
    console.log(this.listUser);
  }

  listUser: UserInterface[] = [];
  userService = inject(UserService);

  deleteUser(id: string) {
    this.userService.delUser(id).subscribe({
      next: (a) => {
        console.log(a, 'FUE ELIMINADO');
      },
    });
  }
}
