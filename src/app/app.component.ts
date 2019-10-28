import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userForms=new FormGroup({
name:new FormControl('jagadeesh',[Validators.required,Validators.maxLength(6)]),
contact:new FormControl(),
email:new FormControl(),
address:new FormGroup({
  street:new FormControl(),
  city:new FormControl(),
  postalcode:new FormControl('518124',Validators.pattern('[0-9]{8}')),
})
  })
  onSubmit(){
    console.log(this.userForms.value)
  }
}
