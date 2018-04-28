import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css']
})
export class AddAddressComponent implements OnInit {
  public isLinear = true;

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  constructor(
    private _formBuilder: FormBuilder
  ) { }
  public addressID:string;
  public houseID:string;
  public state:string;
  public county:string;
  public city:string;
  public zipCode:string;
  public latitude:string;
  public longitude:string;

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      addressIdControl:['',Validators.required],
      houseIdControl:['',Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      stateControl:['',Validators.required],
      countyControl:['',Validators.required],
      cityControl:['',Validators.required],
      zipCodeControl:['',Validators.required],
      latitudeControl:['',Validators.required],
      longitudeControl:['',Validators.required]
    })
  }

  public submit(){

  }

}
