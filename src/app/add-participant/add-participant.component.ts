import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-participant',
  templateUrl: './add-participant.component.html',
  styleUrls: ['./add-participant.component.css']
})
export class AddParticipantComponent implements OnInit {
  public isLinear = true;

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  constructor(
    private _formBuilder: FormBuilder
  ) { }

  public studyId;
  public oldParticipantId;
  public addressId;
  public lastName;
  public firstName;
  public birthdate;
  public sex;

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      studyIDControl: ['', Validators.required],
      oldPIDControl:['',Validators.required],
      addressIDControl:['',Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      lastNameControl: ['', Validators.required],
      firstNameControl:['',Validators.required],
      birthControl:['',Validators.required],
      sexControl:['',Validators.required]
    });
  }

  public sexes = [
    {value:"male"},
    {value:"female"}
  ]

  public submit(){

  }

}
