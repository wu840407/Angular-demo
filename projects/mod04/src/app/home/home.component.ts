import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { deptSubject } from '../subject';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {
  deptSubject = deptSubject;
  public member = {
    userName: "Mary",
    email: "Mary@uuu.com.tw",
    gender: "2",
    brithday: new Date(2000,0,1,0,0,0), 
    subjectID: "U2348"
  };
  gender = [
    { value: "1", display: "男" },
    { value: "2", display: "女" }
  ]

  constructor() { }

  ngOnInit(): void {
  }
  AddMember(form: NgForm) {    
    this.member = {
      userName: "",
      email: "",
      gender: "",
      brithday: new Date(), 
      subjectID: ""
    };
    form.resetForm();
  }
  Save(form:NgForm){
    console.log(form.value);
  }
}
