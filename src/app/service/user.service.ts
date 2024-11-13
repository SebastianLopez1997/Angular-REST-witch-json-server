import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { UserInterface } from '../intefaces/user-interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  urlBase:string= 'http://localhost:3000/users'
  
  http = inject(HttpClient)
  
  getUsers():Observable<UserInterface[]>{
    return this.http.get<UserInterface[]>(this.urlBase);
  }
  
  getUser(id:string | null):Observable<UserInterface>{
    return this.http.get<UserInterface>(`${this.urlBase}/${id}`)
  }
  
  postUser(user:UserInterface):Observable<UserInterface>{
    return this.http.post<UserInterface>(this.urlBase,user);
  }
  
  delUser(id:string | null):Observable<UserInterface>{
    return this.http.delete<UserInterface>(`${this.urlBase}/${id}`)
  }
  
  putUser(id: string | null, user: UserInterface):Observable<UserInterface>{
    return this.http.put<UserInterface>(`${this.urlBase}/${id}`,user);
  }
}
