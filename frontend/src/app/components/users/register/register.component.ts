import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsersService } from 'app/services/users.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  formulario: FormGroup
  constructor(private usersService: UsersService) {

    this.formulario = new FormGroup({
      userName: new FormControl,
      email: new FormControl,
      password: new FormControl
    })
  }
  onSubmit() {
    this.usersService.registerUser(this.formulario.value).subscribe(res => {
      console.log('res', res)
    })
  }

}
