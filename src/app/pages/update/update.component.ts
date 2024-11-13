import { Component } from '@angular/core';
import { PutComponent } from '../../components/task/put/put.component';

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [PutComponent],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent {

}
