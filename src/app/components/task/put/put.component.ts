import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../../../service/user.service';
import {
  FormBuilder,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserInterface } from '../../../intefaces/user-interface';

@Component({
  selector: 'app-put',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './put.component.html',
})
export class PutComponent implements OnInit {
  ngOnInit(): void {
    this.activatedRouter.paramMap.subscribe({
      next: (param) => {
      console.log(param)
        this.id = param.get('idUser');
        alert(this.id);
        this.userSerV.getUser(this.id).subscribe({
          next: (user: UserInterface) => {
            this.formulario.get('id')?.setValue(user.id);
            this.formulario.get('firstname')?.setValue(user.firstname);
            this.formulario.get('lastname')?.setValue(user.lastname);
            this.formulario.get('email')?.setValue(user.email);
            this.formulario.get('country')?.setValue(user.country);
          },error: (e:Error) => {
            console.log(e.message)
          }
        });
      },
    });
  }

  id: string | null = '';

  userSerV = inject(UserService);
  activatedRouter = inject(ActivatedRoute);
  router = inject(Router);
  fb = inject(FormBuilder);

  formulario = this.fb.nonNullable.group({
    id: ['', [Validators.required]],
    firstname: ['', [Validators.required, Validators.minLength(3)]],
    lastname: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    country: ['', [Validators.required, Validators.minLength(3)]],
  });

  post() {
    if (this.formulario.invalid) return;

    const user = this.formulario.getRawValue();
 
    this.userSerV.putUser(this.id, user).subscribe({
      next: () => {
      this.router.navigateByUrl('');
        console.log('User actualizado correctamente');
      },
      error(err: Error) {
        console.log(err.message);
      },
    });
  }
}
