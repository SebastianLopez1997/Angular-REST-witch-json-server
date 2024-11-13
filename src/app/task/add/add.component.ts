import { Component, inject } from '@angular/core';
import { UserService } from '../../service/user.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [ReactiveFormsModule,],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
  
  userS = inject(UserService)
  
  fb = inject(FormBuilder)
  
  formulario = this.fb.nonNullable.group({
    id: ['',[Validators.required]],
    firstname: ['',[Validators.required,Validators.minLength(3)]],
    lastname: ['',[Validators.required,Validators.minLength(4)]],
    email: ['',[Validators.required,Validators.email]],
    country: ['',[Validators.required,Validators.minLength(3)]]
  })
  
  addStudent(){
    if(this.formulario.invalid) return
    
    const user = this.formulario.getRawValue()
    
    this.userS.postUser(user).subscribe({
      next: (u) => {
        console.log(u)
      },
      error: (e:Error) => {
        console.log(e.message)
      }
    
    })
    
  }
  
  
}
