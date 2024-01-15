import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsersService } from 'app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formulario: FormGroup
  constructor(private usersService: UsersService) {
    this.formulario = new FormGroup({
      email: new FormControl,
      password: new FormControl
    })
  }
  onSubmit() {
    this.usersService.loginUser(this.formulario.value).subscribe(res => {
      console.log('res', res)
    })
  }

}
