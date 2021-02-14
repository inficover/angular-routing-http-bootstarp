import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  constructor(public formBuilder: FormBuilder, private userService: UserService) { }

  userForm : FormGroup;
  formSubmitted = false;
  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.userForm = this.formBuilder.group({
      name : ['', Validators.required],
      email : ['', Validators.compose([Validators.pattern(/\S+@\S+\.\S+/), Validators.required]) ],
      phone : ['',Validators.compose([Validators.pattern('[6-9]\\d{9}'), Validators.required]) ]
    });

    this.userForm.get('name').valueChanges.subscribe(value => {
      this.userForm.get('email').setValue(value + '@yourdomain.com')
    })

    this.userForm.valueChanges.subscribe(value => console.log(value) )
  }

  get f() { return this.userForm.controls; }

  createUser() {
    this.formSubmitted = true;
    if(!this.userForm.valid) {
      // alert('Not valid');
      return;
    }
    const user = this.userForm.value;
    this.userService.createUser(user).subscribe(data => {
      console.log(data);
    });
  }
}
